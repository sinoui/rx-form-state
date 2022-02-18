import isEmpty from './isEmpty';

it('判断是否为空', () => {
  expect(isEmpty(null)).toBeTruthy();

  expect(isEmpty('')).toBeTruthy();

  expect(isEmpty(undefined)).toBeTruthy();

  expect(isEmpty('错误信息')).toBeFalsy();

  expect(isEmpty([])).toBeTruthy();

  expect(isEmpty(['1', ''])).toBeFalsy();

  expect(isEmpty({})).toBeTruthy();

  expect(isEmpty({ a: {}, b: {} })).toBeTruthy();

  expect(isEmpty({ a: { c: 1 }, b: {} })).toBeFalsy();
});
