import React from 'react';

export interface Props {
  items: { value: string; label: string }[];
  value?: string[];
  onChange?: (value: string[]) => void;
}

function CustomCheckboxGroup(props: Props) {
  const { items, value = [], onChange } = props;

  const handleCheckboxChange = (checkboxValue: string) => {
    const idx = value.indexOf(checkboxValue);
    if (!onChange) {
      return;
    }
    if (idx === -1) {
      onChange([...value, checkboxValue]);
    } else {
      onChange([...value.slice(0, idx), ...value.slice(idx + 1)]);
    }
  };

  return (
    <div>
      {items.map((item) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label>
          <input
            type="checkbox"
            checked={value && value.includes(item.value)}
            onChange={() => handleCheckboxChange(item.value)}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
}

export default CustomCheckboxGroup;
