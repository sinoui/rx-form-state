import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useFormState from './useFormState';
import FormStateContext from './FormStateContext';
import Field from './Field';
import useFieldError from './useFieldError';
import useFieldTouched from './useFieldTouched';

const Wrapper = ({
  children,
  initialValues = { userName: '张三' },
  validate,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate?: (values: any) => any;
}) => {
  const formState = useFormState(initialValues, {
    validate,
  });
  return (
    <FormStateContext.Provider value={formState}>
      {children}
    </FormStateContext.Provider>
  );
};

afterEach(cleanup);

it('渲染表单域', () => {
  const { getByDisplayValue } = render(
    <Wrapper>
      <Field as="input" name="userName" />
    </Wrapper>,
  );

  expect(getByDisplayValue('张三')).toBeDefined();
});

it('收集输入框值变化', () => {
  const { getByDisplayValue } = render(
    <Wrapper>
      <Field as="input" name="userName" />
    </Wrapper>,
  );

  const input = getByDisplayValue('张三') as HTMLInputElement;

  fireEvent.change(input, {
    target: {
      value: '李四',
    },
  });

  expect(input.value).toBe('李四');
});

it('输入框失去焦点后，显示表单错误状态', () => {
  const { getByDisplayValue } = render(
    <Wrapper
      validate={(values) => (values.userName ? {} : { userName: '必填' })}
    >
      <Field as="input" name="userName" />
    </Wrapper>,
  );

  const input = getByDisplayValue('张三') as HTMLInputElement;

  fireEvent.change(input, {
    target: {
      value: '',
    },
  });

  fireEvent.blur(input);

  expect(input.dataset.error).toBe('true');
});

it('指定默认值', () => {
  const { getByTestId } = render(
    <Wrapper initialValues={{}}>
      <Field as="input" name="userName" defaultValue="" />
    </Wrapper>,
  );

  const input = getByTestId('field-comp') as HTMLInputElement;

  expect(input.value).toBe('');
});

it('表单域校验', () => {
  const { getByTestId } = render(
    <Wrapper initialValues={{}}>
      <Field as="input" name="userName" required />
    </Wrapper>,
  );

  const input = getByTestId('field-comp') as HTMLInputElement;

  fireEvent.blur(input);

  expect(input.dataset.error).toBe('true');
});

it('email校验', () => {
  const emailRegexp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

  const ErrorMessage = () => {
    const error = useFieldError('email') || null;
    const isTouched = useFieldTouched('email');
    return <div data-testid="error">{isTouched ? error : null}</div>;
  };

  const { getByTestId } = render(
    <Wrapper initialValues={{ email: 'xx' }}>
      <Field
        as="input"
        name="email"
        pattern={emailRegexp.source}
        patternErrorMessage="不符合邮件地址规则。"
      />
      <ErrorMessage />
    </Wrapper>,
  );

  fireEvent.blur(getByTestId('field-comp'));

  expect(getByTestId('error')).toHaveTextContent('不符合邮件地址规则。');
});

it('onChange', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Wrapper initialValues={{ email: 'xx' }}>
      <Field as="input" name="email" onChange={onChange} />
    </Wrapper>,
  );

  const event = {
    target: {
      value: 'xx2',
    },
  };
  fireEvent.change(getByTestId('field-comp'), event);

  expect(onChange).toBeCalled();
});

it('onBlur', () => {
  const onBlur = jest.fn();
  const { getByTestId } = render(
    <Wrapper>
      <Field as="input" name="email" onBlur={onBlur} />
    </Wrapper>,
  );

  fireEvent.blur(getByTestId('field-comp'));

  expect(onBlur).toBeCalled();
});

it('自定义值提取器', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function TextInput(props: any) {
    return (
      <input
        {...props}
        onChange={(event) => props.onChange(null, event.target.value)}
        data-testid="field"
      />
    );
  }

  const { getByTestId } = render(
    <Wrapper>
      <Field
        as={TextInput}
        name="userName"
        valueExtract={(_event, value) => `解析出来的值:${value}`}
      />
    </Wrapper>,
  );

  fireEvent.change(getByTestId('field'), {
    target: {
      value: '紫诺',
    },
  });

  expect(getByTestId('field')).toHaveAttribute('value', '解析出来的值:紫诺');
});

it('自定义值格式化器', () => {
  const { getByTestId } = render(
    <Wrapper
      initialValues={{
        userName: '紫诺',
      }}
    >
      <Field
        as="input"
        name="userName"
        valueFormat={(value) => `格式化后的值:${value}`}
        data-testid="field"
      />
    </Wrapper>,
  );

  expect(getByTestId('field')).toHaveAttribute('value', '格式化后的值:紫诺');
});

it('验证Field组件给as组件添加属性时的ts提示', () => {
  // fix #3
  function Child(props: { childProp: string }) {
    // eslint-disable-next-line no-console
    console.log(props);
    return null;
  }

  const element = <Field as={Child} childProp="1" name="userName" />;

  expect(element).toBeDefined();
});

it('innerRef', () => {
  const { getByTestId } = render(
    <Wrapper>
      <Field
        as="input"
        name="userName"
        data-testid="field"
        innerRef={(instance) => {
          if (instance) {
            instance.focus();
          }
        }}
      />
    </Wrapper>,
  );

  expect(getByTestId('field')).toHaveFocus();
});

it('render 方式渲染组件', () => {
  let result: any;
  const { getByTestId } = render(
    <Wrapper
      initialValues={{
        userName: '紫诺',
      }}
    >
      <Field<{ error?: boolean }>
        name="userName"
        error
        render={({ fieldProps }) => {
          result = fieldProps;
          return <input data-testid="input" {...fieldProps} />;
        }}
      />
    </Wrapper>,
  );

  expect(getByTestId('input')).toHaveValue('紫诺');
  expect(result.error).toBe(true);
  expect(result.value).toBe('紫诺');
  expect(result.name).toBe('userName');
  expect(result.onChange).toBeDefined();
  expect(result.onBlur).toBeDefined();
});

it('验证 onChange 声明为必须指定的情况', () => {
  interface AsCompProps {
    value: string;
    onChange: (value: string) => void;
  }

  const AsComp = ({ value }: AsCompProps) => {
    return <div>{value}</div>;
  };

  const AsCompField = () => {
    return (
      <Field<AsCompProps>
        name="userName"
        as={AsComp}
        value="12"
        onChange={(value) => console.log(value)}
      />
    );
  };

  console.log(<AsCompField />);
});

it('valuePropName', () => {
  let result: any;
  render(
    <Wrapper
      initialValues={{
        enabled: true,
      }}
    >
      <Field<{ error?: boolean }>
        name="enabled"
        error
        valuePropName="checked"
        render={({ fieldProps }) => {
          result = fieldProps;
          return <input data-testid="input" {...fieldProps} />;
        }}
      />
    </Wrapper>,
  );

  expect(result.checked).toBe(true);
});
