/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { inputClassName } from '../../../utils/class-names';
import { ErrorText } from '../ErrorText';
import { Label } from '../Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: unknown;
  label?: string;
  register?: UseFormRegisterReturn;
  wrapperClassName?: string;
  readOnly?: boolean;
  onChange?: (value: unknown) => void;
  required?: true;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  error,
  className = inputClassName(error as string),
  label,
  required,
  register,
  wrapperClassName,
  readOnly,
  onChange,
  ...props
}) => (
  <div className={`d-flex flex-column gap-2 ${wrapperClassName}`}>
    <Label label={label} required={required} />

    <div className="relative">
      <input
        className={`form-control ${className} ${readOnly && 'bg-white'}`}
        style={{ backgroundColor: readOnly ? '#ffffff' : '#F3F5FA' }}
        onChange={onChange}
        readOnly={readOnly}
        {...props}
        {...register}
      />
    </div>

    <ErrorText error={error as string} />
  </div>
);
