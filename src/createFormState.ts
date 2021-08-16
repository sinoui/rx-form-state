/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/camelcase */
import { BehaviorSubject, Subject } from 'rxjs';
import {
  map,
  debounceTime,
  mergeMap,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { produce } from 'immer';
import { set, get, memoize } from 'lodash';
import {
  unstable_runWithPriority,
  unstable_NormalPriority,
  unstable_LowPriority,
} from 'scheduler';
import {
  FormStateModel,
  FieldConfig,
  FieldStateModel,
  FormState,
  FormStateOptions,
} from './types';
import isError from './utils/isError';
import isFunction from './utils/isFunction';
import applyFieldRelyRules from './utils/applyFieldRelyRules';
import applyGlobalRelyRules from './utils/applyGlobalRelyRules';
import containsTruthProperty from './utils/containsTruthProperty';

function createSubBehaviorSubject<T, U extends keyof FormStateModel<T>>(
  state$: BehaviorSubject<FormStateModel<T>>,
  key: U,
): BehaviorSubject<FormStateModel<T>[U]> {
  const subState$ = new BehaviorSubject<FormStateModel<T>[U]>(
    state$.value[key],
  );

  state$
    .pipe(
      map((state) => state[key]),
      distinctUntilChanged(),
    )
    .subscribe(subState$);

  return subState$;
}

const fieldAndFormStateNames: {
  [x: string]: keyof FormStateModel;
} = {
  value: 'values',
  error: 'errors',
  asyncError: 'asyncErrors',
  isPending: 'isPending',
  isTouched: 'isTouched',
};

/**
 * 创建表单状态
 *
 * @param intialValues 表单初始值
 */
function createFormState<T = any>(
  intialValues: T = {} as any,
  options: FormStateOptions<T> = {},
): FormState<T> {
  let innerInitialValues = intialValues;
  const fields: FieldConfig[] = [];
  const formState$ = new BehaviorSubject<FormStateModel<T>>({
    values: intialValues,
    isSubmitting: false,
    errors: {},
    isTouched: {},
    asyncErrors: {},
    isPending: {},
  });

  const values$ = createSubBehaviorSubject(formState$, 'values');
  const errors$ = createSubBehaviorSubject(formState$, 'errors');
  const isTouched$ = createSubBehaviorSubject(formState$, 'isTouched');
  const asyncErrors$ = createSubBehaviorSubject(formState$, 'asyncErrors');
  const isPending$ = createSubBehaviorSubject(formState$, 'isPending');
  const relyRules = options.relys || [];

  /**
   * 更新表单状态
   */
  const updateState = (
    producer: (draft: FormStateModel<T>) => void,
  ): FormStateModel<T> => {
    const newFormState = produce(formState$.value, producer);

    formState$.next(newFormState);

    return newFormState;
  };

  const createUpdateSubStateFn = <U extends keyof FormStateModel<T>>(
    key: U,
  ) => (value: FormStateModel<T>[U]) => {
    const newFormState = produce(
      formState$.value,
      (draft: FormStateModel<T>) => {
        draft[key] = value;
      },
    );

    formState$.next(newFormState);
  };

  const setValues = createUpdateSubStateFn('values');

  const validateForm = () => {
    const { values } = formState$.value;
    const errors = options.validate ? options.validate(values) || {} : {};

    fields.forEach((field) => {
      if (field.validate) {
        const fieldError = field.validate(get(values, field.name), values);
        if (fieldError) {
          set(errors, field.name, fieldError);
        }
      }
    });

    return errors;
  };

  /**
   * 设置表单初始值
   */
  const setInitialValues = (initialValues: T) => {
    innerInitialValues = initialValues;
    setValues(initialValues);
  };

  const getAllFieldsTouched = () => {
    const newTouched = {};
    fields.forEach((field) => {
      set(newTouched, field.name, true);
    });
    return newTouched;
  };

  /**
   * 校验表单
   */
  const validate = () => {
    const errors = validateForm();

    const isValid = !isError(errors);

    formState$.next(
      produce(formState$.value, (draft: FormStateModel<T>) => {
        draft.errors = errors;

        if (!isValid) {
          draft.isTouched = getAllFieldsTouched();
        }
      }),
    );

    return isValid;
  };

  /**
   * 重置表单
   */
  const reset = (defaultValues: T = innerInitialValues) => {
    formState$.next(
      produce(formState$.value, (draft: FormStateModel<T>) => {
        draft.values = defaultValues;
        draft.isSubmitting = false;
        draft.errors = {};
        draft.asyncErrors = {};
        draft.isTouched = {};
        draft.isPending = {};
      }),
    );
  };

  const setSubmitting = createUpdateSubStateFn('isSubmitting');

  /**
   * 等待异步校验完成
   *
   * @returns
   */
  function waitPending() {
    if (!containsTruthProperty(isPending$.value)) {
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      const subscription = isPending$
        .pipe(
          map(containsTruthProperty),
          filter((x) => !x),
        )
        .subscribe(() => {
          resolve();
          subscription.unsubscribe();
        });
    });
  }

  /**
   * 提交表单
   */
  const submit = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event && event.preventDefault && isFunction(event.preventDefault)) {
      event.preventDefault();
    }
    if (event && event.stopPropagation && isFunction(event.stopPropagation)) {
      event.stopPropagation();
    }

    const isValid = validate() && !isError(asyncErrors$.value);

    if (isValid && options.onSubmit) {
      setSubmitting(true);
      await waitPending();
      try {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const result = await options.onSubmit(values$.value, formState);
        unstable_runWithPriority(unstable_NormalPriority, () => {
          updateState((draft) => {
            draft.isSubmitting = false;
            draft.isTouched = {};
          });
        });
        return result;
      } catch (e) {
        unstable_runWithPriority(unstable_NormalPriority, () => {
          updateState((draft) => {
            draft.isSubmitting = false;
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (!formState.isValid) {
              draft.isTouched = getAllFieldsTouched();
            }
          });
        });
        throw e;
      }
    }

    if (!isValid) {
      throw new Error('表单校验失败');
    }

    return undefined;
  };

  /**
   * 获取表单域状态的可观察对象
   *
   * @param fieldName 表单域名称
   */
  const getFieldState$: any = memoize(<M>(fieldName: string) => {
    const getFieldState = (formState: FormStateModel<T>) => {
      return {
        name: fieldName,
        value: get(formState.values, fieldName) as M,
        error: get(formState.errors, fieldName) as string | undefined,
        isTouched: get(formState.isTouched, fieldName) as boolean,
        asyncError: get(formState.asyncErrors, fieldName) as string | undefined,
        isPending: get(formState.isPending, fieldName) as boolean,
      };
    };

    const fieldState$ = new BehaviorSubject<FieldStateModel<M>>(
      getFieldState(formState$.value),
    );

    formState$.pipe(map(getFieldState)).subscribe(fieldState$);

    return fieldState$;
  });

  /**
   * 获取表单域状态
   *
   * @param fieldName 表单域名称
   */
  const getFieldState = <M = any>(fieldName: string): FieldStateModel<M> => {
    return getFieldState$(fieldName).value as any;
  };

  /**
   * 设置表单域状态
   */
  const setFieldState = <M>(
    fieldName: string,
    producer: (draft: FieldStateModel<M>) => void,
  ) => {
    const fieldState: any = getFieldState<M>(fieldName);
    const newFieldState: any = produce(fieldState, producer);

    if (newFieldState !== fieldState) {
      updateState((draft) => {
        Object.keys(fieldState)
          .filter((key) => key !== 'name')
          .forEach((key) => {
            const oldValue = fieldState[key];
            const newValue = newFieldState[key];

            if (oldValue !== newValue) {
              set(
                (draft as any)[fieldAndFormStateNames[key]],
                fieldName,
                newValue,
              );
            }
          });
      });
    }
    return newFieldState;
  };

  const asyncValidateActions$ = new Subject<string>();

  /**
   * 执行表单域的异步校验
   *
   * @param fieldName 表单域
   */
  async function execFieldAsyncValidate(fieldName: string) {
    const field = fields.find((item) => item.name === fieldName);
    const asyncValidate = field ? field.asyncValidate : undefined;
    if (!asyncValidate) {
      return undefined;
    }
    try {
      updateState((draft) => {
        set(draft.isPending, fieldName, true);
      });
      const values = values$.value;
      const error = await asyncValidate((values as any)[fieldName], values);
      return error;
    } catch (e) {
      return undefined;
    }
  }

  /**
   * 异步表单域校验
   */
  asyncValidateActions$
    .pipe(
      debounceTime(500),
      mergeMap(async (fieldName) => {
        const error = await execFieldAsyncValidate(fieldName);
        return { fieldName, error };
      }),
    )
    .subscribe((result) => {
      unstable_runWithPriority(unstable_LowPriority, () => {
        updateState((draft) => {
          if (!get(draft.errors, result.fieldName)) {
            set(draft.asyncErrors, result.fieldName, result.error);
          }
          set(draft.isPending, result.fieldName, false);
        });
      });
    });

  /**
   * 校验表单域
   */
  const validateField = (fieldName: string) => {
    const errors = validateForm();
    const isFieldError = get(errors, fieldName);

    updateState((draft) => {
      draft.errors = errors;
      if (isFieldError) {
        set(draft.asyncErrors, fieldName, undefined);
        set(draft.isPending, fieldName, false);
      }
    });

    const field = fields.find((item) => item.name === fieldName);
    if (!isFieldError && field && field.asyncValidate) {
      asyncValidateActions$.next(fieldName);
    }
  };

  /**
   * 校验多个表单域（只校验指定的表单域，其他表单域都不校验）
   *
   * @param fieldNames 表单域名称
   */
  const validateFields = async (...fieldNames: string[]) => {
    const errors = validateForm();

    await Promise.all(
      fieldNames.map(async (fieldName) => {
        if (!get(errors, fieldName)) {
          const asyncError = await execFieldAsyncValidate(fieldName);
          set(errors, fieldName, asyncError);
        }
      }),
    );

    updateState((draft) => {
      fieldNames.forEach((fieldName) => {
        const fieldError = get(errors, fieldName);
        set(draft.errors, fieldName, fieldError);
        if (fieldError) {
          set(draft.asyncErrors, fieldName, undefined);
          set(draft.isPending, fieldName, false);
          set(draft.isTouched, fieldName, true);
        }
      });
    });

    const isFieldsError = fieldNames.some(
      (fieldName) => !!get(errors, fieldName),
    );

    return !isFieldsError;
  };

  /**
   * 设置表单域值
   *
   * @param fieldName 表单域名称
   * @param value 表单域值
   */
  const setFieldValue = <M>(fieldName: string, value: M) => {
    if (get(values$.value, fieldName) === value) {
      return;
    }

    const oldValues = values$.value;

    updateState((draft) => {
      set(draft.values as any, fieldName, value);
    });

    unstable_runWithPriority(unstable_NormalPriority, () => {
      updateState((draft) => {
        applyFieldRelyRules(draft.values, oldValues, fields as any, fieldName);
      });

      if (relyRules && relyRules.length > 0) {
        setValues(
          applyGlobalRelyRules(relyRules, fieldName, values$.value, oldValues),
        );
      }

      unstable_runWithPriority(unstable_LowPriority, () => {
        validateField(fieldName);
      });
    });
  };

  /**
   * 表单域失去焦点
   */
  const blur = (fieldName: string) => {
    updateState((draft) => {
      set(draft.isTouched, fieldName, true);
    });

    unstable_runWithPriority(unstable_LowPriority, () => {
      validateField(fieldName);
    });
  };

  /**
   * 设置表单域的被点击状态
   */
  const setFieldTouched = (fieldName: string, isTouched = true) => {
    updateState((draft) => {
      set(draft.isTouched, fieldName, isTouched);
    });
  };

  /**
   * 设置表单域验证错误
   */
  const setFieldError = (fieldName: string, error?: string) => {
    updateState((draft) => {
      set(draft.errors, fieldName, error);
    });
  };

  /**
   * 设置表单域执行异步校验的状态
   */
  const setFieldPending = (fieldName: string, isPending: boolean) => {
    updateState((draft) => {
      set(draft.isPending, fieldName, isPending);
    });
  };

  /**
   * 设置表单域的异步校验错误
   */
  const setFieldAsyncError = (fieldName: string, asyncError?: string) => {
    updateState((draft) => {
      set(draft.asyncErrors, fieldName, asyncError);
    });
  };

  /**
   * 添加表单域配置
   * @param fieldConfig 表单域配置
   */
  const addField = (fieldConfig: FieldConfig) => {
    const idx = fields.findIndex((item) => item.name === fieldConfig.name);
    if (idx === -1) {
      fields.push(fieldConfig);
    } else {
      fields.splice(idx, 1, fieldConfig);
    }
  };

  /**
   * 删除表单域
   */
  const removeField = (fieldName: string) => {
    const idx = fields.findIndex((item) => item.name === fieldName);

    if (idx !== -1) {
      fields.splice(idx, 1);
    }
  };

  /**
   * 添加值关联计算规则
   *
   * @param fieldNames 依赖表单项
   * @param relyFn 值关联计算函数
   */
  const addRelyRule = (fieldNames: string[], relyFn: (draft: T) => void) => {
    const rule = [...fieldNames, relyFn];
    relyRules.push(rule);
    return () => {
      const idx = relyRules.indexOf(rule);
      if (idx !== -1) {
        relyRules.splice(idx, 1);
      }
    };
  };

  const formState = {
    formState$,
    values$,
    errors$,
    isTouched$,
    asyncErrors$,
    isPending$,

    get initialValues() {
      return innerInitialValues;
    },

    get values() {
      return values$.value;
    },

    get isSubmitting() {
      return formState$.value.isSubmitting;
    },

    get errors() {
      return errors$.value;
    },

    get isTouched() {
      return isTouched$.value;
    },

    get asyncErrors() {
      return asyncErrors$.value;
    },

    get isPending() {
      return isPending$.value;
    },

    get isFormPending() {
      return containsTruthProperty(isPending$.value);
    },

    get isValid() {
      return !isError(errors$.value) && !isError(asyncErrors$.value);
    },

    updateState,
    validate,
    setValues,
    setInitialValues,
    setTouched: createUpdateSubStateFn('isTouched'),
    setErrors: createUpdateSubStateFn('errors'),
    setPending: createUpdateSubStateFn('isPending'),
    setAsyncErrors: createUpdateSubStateFn('asyncErrors'),
    reset,
    setSubmitting,
    submit,

    getFieldState,
    getFieldState$,
    setFieldState,
    setFieldValue,
    validateField,
    validateFields,
    blur,
    setFieldTouched,
    setFieldError,
    setFieldPending,
    setFieldAsyncError,

    addField,
    removeField,

    addRelyRule,
  };

  return formState;
}

export default createFormState;
