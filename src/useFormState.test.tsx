import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { skip } from 'rxjs/operators';
import useFormState from './useFormState';

it('创建表单状态', () => {
  const { result } = renderHook(() => useFormState());

  expect(result.current.values$.value).toEqual({});
});

it('指定表单初始值', () => {
  const { result } = renderHook(() => useFormState({ userName: '张三' }));

  expect(result.current.values$.value).toEqual({ userName: '张三' });
});

it('指定表单校验逻辑和表单提交处理', async () => {
  const onSubmit = jest.fn();
  onSubmit.mockResolvedValue('ok');
  const validate = ({ userName }: any) =>
    userName ? {} : { userName: '姓名不能为空' };
  const { result } = renderHook(() => useFormState({}, { onSubmit, validate }));

  result.current.validate();

  expect(result.current.errors$.value).toEqual({
    userName: '姓名不能为空',
  });

  result.current.setFieldValue('userName', '张三');

  expect(result.current.errors$.value).toEqual({});

  await result.current.submit();

  expect(onSubmit).toHaveBeenCalledWith(
    result.current.values$.value,
    result.current,
  );
});

it('新的初始值', () => {
  interface FormValuesType {
    userName?: string;
  }

  const {
    result,
    rerender,
  } = renderHook((initialValues: FormValuesType = {}) =>
    useFormState(initialValues),
  );
  const formState = result.current;

  rerender({ userName: '张三' });

  expect(formState.values.userName).toBe('张三');
});

it('重绘时不会引起无限重绘', () => {
  interface FormValuesType {
    userName?: string;
    favs?: string[];
  }

  const { result, rerender } = renderHook(
    (
      initialValues: FormValuesType = {
        favs: ['1', '2', '3'],
        userName: '测试',
      },
    ) => useFormState(initialValues),
  );
  const formState = result.current;
  const valueChangeHandler = jest.fn();
  formState.values$.pipe(skip(1)).subscribe(valueChangeHandler);
  rerender({ favs: ['1', '2', '3'], userName: '测试' });

  expect(valueChangeHandler).not.toBeCalled();
});

it('useFormState指定options时，不会应用新的初始值', () => {
  // issue #2
  const { result, rerender } = renderHook((initialValues) =>
    useFormState(initialValues, { onSubmit: jest.fn() }),
  );

  act(() => {
    rerender({ userName: '张三' });
  });

  expect(result.current.values).toEqual({
    userName: '张三',
  });
});

it('指定options情况下重绘时可能导致restState被重置', () => {
  const { result, rerender } = renderHook(() =>
    useFormState(undefined, { onSubmit: jest.fn() }),
  );

  act(() => {
    result.current.setFieldValue('userName', '测试');
  });

  expect(result.current.values.userName).toBe('测试');

  act(() => {
    rerender();
  });

  expect(result.current.values.userName).toBe('测试');
});

it('使用动态 submit 回调函数', async () => {
  const submit1 = jest.fn();
  const submit2 = jest.fn();
  const { result, rerender } = renderHook(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (onSubmit: any) => useFormState(undefined, { onSubmit }),
    {
      initialProps: submit1,
    },
  );

  rerender(submit2);

  await result.current.submit();

  expect(submit1).not.toBeCalled();
  expect(submit2).toBeCalled();
});

it('新的初始值与表单值相同时，不应用新的初始值', () => {
  interface FormValuesType {
    A: {
      B: number;
    };
  }

  const {
    result,
    rerender,
  } = renderHook((initialValues: FormValuesType = { A: { B: 1 } }) =>
    useFormState(initialValues),
  );
  const formState = result.current;

  formState.setFieldValue('A.B', 3);

  const valueChangeCallback = jest.fn();
  formState.values$.pipe(skip(1)).subscribe(valueChangeCallback);

  act(() => {
    rerender({ A: { B: 3 } });
  });

  expect(valueChangeCallback).not.toBeCalled();
});

it('禁止应用新的表单初始值', () => {
  interface FormValuesType {
    userName?: string;
  }

  const {
    result,
    rerender,
  } = renderHook((initialValues: FormValuesType = {}) =>
    useFormState(initialValues, { enableReinitialize: false }),
  );
  const formState = result.current;

  rerender({
    userName: '张三',
  });

  expect(formState.values.userName).toBe(undefined);
});
