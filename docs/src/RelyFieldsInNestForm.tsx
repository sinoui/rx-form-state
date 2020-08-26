/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  useFieldArray,
  useFormState,
  FormValueMonitor,
  Field,
  FormStateContext,
} from '../../src';

import TelephoneForm from './TelephoneForm';

const relyFn = (values: any, index: number) => {
  if (values.topContacts) {
    const { firstName = '', lastName = '' } = values.topContacts[index];
    return `${firstName}${lastName}`;
  }
  return '';
};

function FormInner(props: any) {
  const { name, index, insert, remove, swap, itemsLength } = props;
  return (
    <div
      style={{
        display: 'flex',
        padding: 8,
        border: '1px solid green',
        margin: 8,
      }}
    >
      <div>
        <Field
          name={name(index, 'firstName')}
          as="input"
          required
          placeholder="姓氏"
        />
      </div>
      <div>
        <Field
          name={name(index, 'lastName')}
          as="input"
          required
          placeholder="名字"
        />
      </div>
      <div>
        <Field
          name={name(index, 'userName')}
          as="input"
          required
          placeholder="姓名"
          relyFields={[name(index, 'firstName'), name(index, 'lastName')]}
          relyFn={(values) => relyFn(values, index)}
        />
      </div>
      <TelephoneForm parentName={`topContacts[${index}]`} />
      <button type="button" onClick={() => insert(index + 1, {})}>
        +
      </button>
      <button type="button" onClick={() => remove(index)}>
        -
      </button>
      {index > 0 && (
        <button type="button" onClick={() => swap(index, index - 1)}>
          ⬆️
        </button>
      )}
      {index < itemsLength - 1 && (
        <button type="button" onClick={() => swap(index, index + 1)}>
          ⬇️
        </button>
      )}
    </div>
  );
}

const Item = React.memo(FormInner);

function TopContactsForm() {
  const {
    getFieldName: name,
    items,
    insert,
    remove,
    push,
    swap,
  } = useFieldArray('topContacts');

  return (
    <div style={{ paddingTop: 16, paddingBottom: 16 }}>
      <label>添加常用联系人</label>
      {items.map((_telephone, index) => (
        <Item
          key={index}
          index={index}
          name={name}
          itemsLength={items.length}
          insert={insert}
          remove={remove}
          swap={swap}
        />
      ))}
      <button type="button" onClick={() => push({})}>
        +
      </button>
    </div>
  );
}

export default function FormDemo() {
  const formState = useFormState();

  return (
    <FormStateContext.Provider value={formState}>
      <form>
        <div>
          <label>用户名</label>
          <Field as="input" name="userName" required />
        </div>
        <TopContactsForm />
        <FormValueMonitor>
          {(values) => (
            <div>表单值：{JSON.stringify(values, undefined, 2)}</div>
          )}
        </FormValueMonitor>
      </form>
    </FormStateContext.Provider>
  );
}
