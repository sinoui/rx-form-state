import React from 'react';
import { useFieldTouched, useFieldError } from '../src';

export default function FieldError({ name }) {
  const isTouched = useFieldTouched(name);
  const errorMessage = useFieldError(name);

  return isTouched && errorMessage ? (
    <div style={{ color: 'red' }}>{errorMessage}</div>
  ) : null;
}
