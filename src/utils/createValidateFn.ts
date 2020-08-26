import isNaN from 'lodash/isNaN';
import { FieldValidateProps } from '../types';

function createValidateFn(props: FieldValidateProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (value: any, values: any) => {
    if (props.required && !value) {
      return '必填';
    }

    if (
      props.required &&
      value &&
      typeof value === 'object' &&
      Object.keys(value).length === 0
    ) {
      return '必填';
    }

    if (
      props.trimRequired &&
      (!value || (value as string).trim().length === 0)
    ) {
      return '必填';
    }

    if (typeof props.max === 'number' && value) {
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && props.max < numValue) {
        return `不能超过${props.max}`;
      }
    }

    if (typeof props.min === 'number' && value) {
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && props.min > numValue) {
        return `不能小于${props.min}`;
      }
    }

    if (typeof props.minLength === 'number' && value) {
      if ((value as string).length < props.minLength) {
        return `长度不能小于${props.minLength}`;
      }
    }

    if (typeof props.maxLength === 'number' && value) {
      if ((value as string).length > props.maxLength) {
        return `长度不能大于${props.maxLength}`;
      }
    }

    if (props.pattern && value) {
      if (!new RegExp(`^(?:${props.pattern})$`, 'u').test(value)) {
        return (
          props.patternErrorMessage ||
          props.title ||
          `违反校验规则：${props.pattern}`
        );
      }
    }

    if (props.validate) {
      return props.validate(value, values);
    }

    return undefined;
  };
}

export default createValidateFn;
