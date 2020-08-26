import React from 'react';
import { useFormState, FormStateContext, FormValueMonitor } from '../../../src';
import CheckboxGroupField from './CustomCheckboxGroupField';

const items = ['足球', '篮球', '排球', '乒乓球'].map((item) => ({
  value: item,
  label: item,
}));
function CheckboxGroupFieldDemo() {
  const formState = useFormState({ fav: '足球,篮球' });
  return (
    <FormStateContext.Provider value={formState}>
      <CheckboxGroupField items={items} name="fav" />
      <FormValueMonitor path="fav">
        {(fav) => <div>fav值: {fav}</div>}
      </FormValueMonitor>
    </FormStateContext.Provider>
  );
}

export default CheckboxGroupFieldDemo;
