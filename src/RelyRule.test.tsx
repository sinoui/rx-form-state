import React from 'react';
import { render } from '@testing-library/react';
import FormStateContext from './FormStateContext';
import createFormState from './createFormState';
import RelyRule from './RelyRule';

it('添加关联计算的逻辑', () => {
  const formState = createFormState({
    A: 1,
    B: 0,
    C: 1,
  });

  const { unmount, rerender } = render(
    <FormStateContext.Provider value={formState}>
      <RelyRule
        relyFields={['B', 'C']}
        relyFn={(draft) => {
          draft.A = draft.B + draft.C;
        }}
      />
    </FormStateContext.Provider>,
  );

  formState.setFieldValue('B', 2);
  expect(formState.getFieldState('A').value).toBe(3);

  rerender(
    <FormStateContext.Provider value={formState}>
      <RelyRule
        relyFields={['B', 'C']}
        relyFn={(draft) => {
          draft.A = draft.B + draft.C + 3;
        }}
      />
    </FormStateContext.Provider>,
  );
  formState.setFieldValue('B', 3);
  expect(formState.getFieldState('A').value).toBe(7);

  unmount();
  formState.setFieldValue('B', 7);
  expect(formState.getFieldState('A').value).toBe(7);
});
