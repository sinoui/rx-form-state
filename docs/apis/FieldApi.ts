import { FieldValidateProps, FieldModel } from '../../src/types';

interface FieldConfig<T = any> extends FieldValidateProps {
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
  as?: React.ReactType;
  /**
   * 默认值。
   */
  defaultValue?: T;
  /**
   * 指定值提取器
   */
  valueExtract?: (event: any, ...rest: any[]) => T;

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
  relyFn?: (newValues: T, oldValues: T) => void;

  /**
   * 指定渲染函数
   */
  render?: (props: FieldModel<T>) => React.ReactNode;

  /**
   * 引用as组件
   */
  innerRef?: React.Ref<any>;
}

function Field<Value>(props: FieldConfig<Value>) {
  console.log(props);
  return null;
}

export default Field;
