/* eslint-disable no-console */
import React, { useCallback, useEffect, useMemo } from 'react';
import useField from './useField';
import isEvent from './utils/isEvent';
import useValueRef from './utils/useValueRef';
import { FieldValidateProps, FieldModel } from './types';
import createValidateFn from './utils/createValidateFn';
import useFormStateContext from './useFormStateContext';

interface FieldBaseProps<
  AsCompProps = any,
  ValueType = any,
  AsCompValueType = ValueType,
> extends FieldValidateProps {
  /**
   * 表单域名称。可以指定路径。
   *
   * 例如：
   *
   * * `userName`
   * * `address.city`
   * * `friends[0].name`
   */
  name: string;
  /**
   * 指定表单域组件
   */
  as?: React.ReactType<AsCompProps>;
  /**
   * 默认值。
   */
  defaultValue?: AsCompValueType;
  /**
   * 子节点的值的属性。默认为`value`。例外情况如复选框的值属性为`checked`。
   */
  valuePropName?: string;
  /**
   * 指定值提取器
   */
  valueExtract?: (event: any, ...rest: any[]) => ValueType;
  /**
   * 值格式化器。从 formState 取到值后，可以经过值格式化器转换成表单域组件可用的数据类型的值。
   */
  valueFormat?: (value: any) => AsCompValueType;

  /**
   * 表单域异步校验方法
   *
   *
   * @returns {(string | undefined | null | Promise<string | undefined>} 返回校验结果
   */
  asyncValidate?: (value: any, values: any) => Promise<string | undefined>;

  /**
   * 关联字段名
   */
  relyFields?: string[];

  /**
   * 值关联计算方法
   * @param newValues 表单新的值
   * @param oldValues 表单旧的值
   */
  relyFn?: (newValues: ValueType, oldValues: ValueType) => void;

  /**
   * 指定渲染函数
   */
  render?: (
    props: FieldModel<AsCompValueType> & {
      fieldProps: {
        [x: string]: any;
      };
    },
  ) => React.ReactNode;

  /**
   * 引用as组件的ref
   */
  innerRef?: React.Ref<any>;
}

/**
 * 默认的值提取器
 *
 * @param event 值或者变更事件
 */
function defaultValueExtract<T>(
  event: React.ChangeEvent<HTMLInputElement> | T,
) {
  return isEvent(event) ? event.target.value : event;
}

type GenericFieldHTMLAttributes =
  | JSX.IntrinsicElements['input']
  | JSX.IntrinsicElements['select']
  | JSX.IntrinsicElements['textarea'];

export type RxFieldProps<
  AsCompProps = GenericFieldHTMLAttributes,
  ValueType = any,
  AsCompValueType = ValueType,
> = FieldBaseProps<AsCompProps, ValueType, AsCompValueType> &
  Omit<AsCompProps, 'onChange'> & {
    onChange?: (...args: any[]) => void;
  };

/**
 * 设置表单域配置hook
 *
 * @param props 表单域组件属性
 */
function useSetFieldConfig(props: RxFieldProps<any, any>) {
  const { addField, removeField } = useFormStateContext();
  const { name } = props;
  const propsRef = useValueRef(props);
  useEffect(() => {
    const { asyncValidate, relyFields, relyFn } = propsRef.current;
    const fieldConfig = {
      name,
      validate: createValidateFn(propsRef.current),
      asyncValidate,
      relyFields,
      relyFn,
    };
    addField(fieldConfig);
    return () => removeField(name);
  }, [addField, name, propsRef, removeField]);
}

/**
 * 表单域组件
 */
function Field<
  AsCompProps = GenericFieldHTMLAttributes,
  ValueType = string,
  AsCompValueType = ValueType,
>(props: RxFieldProps<AsCompProps, ValueType, AsCompValueType>) {
  const {
    as: AsComp,
    render,
    name,
    defaultValue,
    valueExtract = defaultValueExtract,
    valueFormat,
    asyncValidate,
    relyFields,
    relyFn,
    validate,
    required,
    onChange,
    onBlur,
    innerRef,
    valuePropName = 'value',
    trimRequired,
    ...rest
  } = props as any;
  const field = useField<any>(name);
  const { setFieldValue, value, blur, isTouched, error } = field;
  const valueExtractRef = useValueRef(valueExtract);
  const valueFormatRef = useValueRef(valueFormat);
  const onChangeRef = useValueRef<any>(onChange);
  const onBlurRef = useValueRef<any>(onBlur);

  const currentValue = useMemo(() => {
    let result = value;
    if (valueFormatRef.current) {
      result = valueFormatRef.current(value);
    }
    return result === undefined ? defaultValue : result;
  }, [value, defaultValue, valueFormatRef]);

  useSetFieldConfig(props);

  const handleChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement> | AsCompValueType,
      ...args: any[]
    ) => {
      const newValue = valueExtractRef.current(event, ...args);

      setFieldValue(newValue);

      if (onChangeRef.current) {
        onChangeRef.current(event as any, ...args);
      }
    },
    [onChangeRef, setFieldValue, valueExtractRef],
  );

  const handleBlur = useCallback(
    (event: any) => {
      blur();

      if (onBlurRef.current) {
        onBlurRef.current(event);
      }
    },
    [blur, onBlurRef],
  );

  const fieldProps = {
    ...rest,
    name,
    ref: innerRef,
    [valuePropName]: currentValue,
    onBlur: handleBlur,
    onChange: handleChange,
    'data-error': isTouched && !!error,
  };

  if (render) {
    return render({ ...field, fieldProps }) as JSX.Element;
  }

  if (AsComp) {
    return <AsComp data-testid="field-comp" {...fieldProps} />;
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn('未指定as或者render属性。');
  }

  return null;
}

export default Field;
