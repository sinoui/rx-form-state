import React from 'react';
import { Field } from '../../../src';
import CheckboxGroup, {
  Props as CheckboxGroupProps,
} from './CustomCheckboxGroup';

function valueExtract(value: string[]) {
  return value.join(',');
}

function valueFormat(value: string) {
  return value.split(',');
}

function CheckboxGroupField({
  name,
  items,
}: {
  name: string;
  items: { value: string; label: string }[];
}) {
  return (
    <Field<CheckboxGroupProps, string, string[]>
      name={name}
      as={CheckboxGroup}
      valueExtract={valueExtract}
      valueFormat={valueFormat}
      items={items}
    />
  );
}

export default CheckboxGroupField;
