import { memoize, get } from 'lodash';
import { FormStateModel } from './types';
import useFormStateContext from './useFormStateContext';
import isEmpty from './utils/isEmpty';
import useBehaviorSubject from './utils/useBehaviorSubject';

const getFieldError = memoize(
  (fieldName?: string) => (formState: FormStateModel) => {
    if (fieldName) {
      const fieldError = get(formState.errors, fieldName) as string | undefined;
      if (!isEmpty(fieldError)) {
        return fieldError;
      }
    }
    if (fieldName) {
      const asyncError: string | undefined = get(
        formState.asyncErrors,
        fieldName,
      ) as string | undefined;
      if (!isEmpty(asyncError)) {
        return asyncError;
      }
    }
    return undefined;
  },
);

/**
 * 获取表单域校验错误
 */
function useFieldError(fieldName?: string) {
  const formState = useFormStateContext();
  return useBehaviorSubject<FormStateModel, string | undefined>(
    formState.formState$,
    getFieldError(fieldName),
  );
}

export default useFieldError;
