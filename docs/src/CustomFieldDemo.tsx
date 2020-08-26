/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  useFormState,
  FormValueMonitor,
  FormStateContext,
  Field,
} from '../../src';

export function TimeInput({
  value = '00:00',
  onChange,
}: {
  onChange: (hour: string, minute: string) => void;
  value?: string;
}) {
  const [hour, minute] = value.split(':');

  return (
    <div>
      <label>
        <input
          value={hour}
          onChange={(event) => {
            onChange(event.target.value, minute);
          }}
        />
        h
      </label>
      <label>
        <input
          value={minute}
          onChange={(event) => {
            onChange(hour, event.target.value);
          }}
        />
        m
      </label>
    </div>
  );
}

export function TimeInputField(props: any) {
  return (
    <Field
      {...props}
      as={TimeInput}
      valueExtract={(hour, minute) => `${hour}:${minute}`}
    />
  );
}

export default function CustomFormFieldDemo() {
  const formState = useFormState();

  return (
    <FormStateContext.Provider value={formState}>
      <form>
        <div>
          <label>开始时间</label>
          <TimeInputField name="startTime" />
        </div>
        <div>
          <label>结束时间</label>
          <TimeInputField name="endTime" />
        </div>
        <FormValueMonitor>
          {(values) => <div>表单值：{JSON.stringify(values)}</div>}
        </FormValueMonitor>
      </form>
    </FormStateContext.Provider>
  );
}
