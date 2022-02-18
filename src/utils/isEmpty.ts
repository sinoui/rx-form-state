/**
 * 判断指定的值是否可遍历
 *
 * @param value 值
 */
function isIterable(value: any): value is Iterable<any> {
  return typeof value[Symbol.iterator] === 'function';
}

/**
 * 判断指定的值是否为空
 *
 * @param value 需要判空的值
 */
export default function isEmpty<T>(value?: T): value is undefined {
  if (value == null) {
    return true;
  }

  if (typeof value === 'string') {
    return !value.trim();
  }

  if (Array.isArray(value)) {
    return value.length === 0 || value.every(isEmpty);
  }

  if (typeof value === 'object') {
    if (isIterable(value)) {
      return isEmpty(Array.from(value));
    }
    return Object.values(value).every(isEmpty);
  }

  return false;
}
