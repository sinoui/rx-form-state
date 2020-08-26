import { useState } from 'react';
import isEqual from 'react-fast-compare';
import { FormStateOptions } from './types';
import createFormState from './createFormState';
import useValueRef from './utils/useValueRef';

interface Options<T> extends FormStateOptions<T> {
  /**
   * 是否监听初始化值变化。默认为true
   */
  enableReinitialize?: boolean;
}

/**
 * 创建表单状态的hook
 *
 * @param initialValues 表单初始值
 * @param options 表单配置
 */
function useFormState<T = any>(
  initialValues: T = {} as any,
  options?: Options<T>,
) {
  const optionsRef = useValueRef(options);
  const [formState] = useState(() => {
    const proxyOptions = {};

    if (options) {
      Object.keys(options).forEach((key: any) => {
        Object.defineProperty(proxyOptions, key, {
          get: () =>
            optionsRef.current && optionsRef.current[key as keyof Options<T>],
        });
      });
    }

    return createFormState(initialValues, proxyOptions);
  });

  const { initialValues: currentInitialValues, values } = formState;

  if (
    options?.enableReinitialize !== false &&
    initialValues !== currentInitialValues &&
    initialValues !== values &&
    !isEqual(initialValues, currentInitialValues) &&
    !isEqual(initialValues, values)
  ) {
    formState.setInitialValues(initialValues);
  }

  return formState;
}

export default useFormState;
