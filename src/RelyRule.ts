import { useEffect, useRef } from 'react';
import useFormStateContext from './useFormStateContext';
import useValueRef from './utils/useValueRef';

interface Props<T> {
  /**
   * 关联的表单项
   */
  relyFields: string[];
  /**
   * 值关联计算的逻辑
   */
  relyFn: (draft: T) => void;
}

/**
 * 动态添加值关联计算规则
 */
function RelyRule<T = any>({ relyFields, relyFn }: Props<T>) {
  const relyFieldsRef = useRef(relyFields);
  const relyFnRef = useValueRef(relyFn);
  const formState = useFormStateContext();

  useEffect(() => {
    const fn = (...args: any[]) => (relyFnRef as any).current(...args);
    return formState.addRelyRule(relyFieldsRef.current, fn);
  }, [formState, relyFnRef]);

  return null;
}

export default RelyRule;
