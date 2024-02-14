import {
  forwardRef,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
  type ReactElement,
  useEffect,
  useState
} from 'react';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import type { PasswordValidations } from '../../../types/Validations';
import { inputClassName } from '../../../utils/class-names';
import { ErrorText } from '../ErrorText';
import { Label } from '../Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: unknown;
  register?: UseFormRegisterReturn;
  passWordValidations?: Array<PasswordValidations>;
}

const PasswordInputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, register, required, passWordValidations, ...props },
  ref
) => {
  const [changeType] = useState<string>('password');
  const [statusLabel, setStatusLabel] = useState<string>('Bad');
  const [statusColor, setStatusColor] = useState<string>('bg-red-ERROR');

  // const changeTypeHandler = (): void => {
  //   setChangeType(changeType === 'password' ? 'text' : 'password');
  // };

  useEffect(() => {
    const validations = passWordValidations?.filter((data) => data.complete === true) || [];

    if (validations?.length <= 1) {
      setStatusLabel('Bad');
      setStatusColor('bg-red-ERROR');
    } else if (validations?.length === 2) {
      setStatusLabel('Good');
      setStatusColor('bg-gold-500');
    } else {
      setStatusLabel('Great');
      setStatusColor('bg-green-500');
    }
  }, [passWordValidations]);

  const renderPasswordsValidations = (
    message: string,
    complete: boolean,
    key: number
  ): ReactElement => {
    return (
      <div className="d-flex gap-1 align-items-center" key={key}>
        <div
          className={`w-2 h-2 rounded-circle ${
            complete ? `${statusColor}` : `opacity-10 ${statusColor}`
          }`}
        >
          {' '}
        </div>{' '}
        {message && <div className="font-weight-bold text-gray-600">{message}</div>}
      </div>
    );
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex justify-content-between font-weight-bold text-gray-600">
        <Label label={label} required={required} />

        {passWordValidations?.length ? (
          <div className="d-flex gap-1 align-items-center">
            {passWordValidations?.length && <div> {statusLabel} </div>}
            <div className="d-flex gap-1 align-items-center">
              {passWordValidations?.map((data, key) => {
                return renderPasswordsValidations('', data.complete || false, key);
              })}
            </div>
          </div>
        ) : null}
      </div>
      <div className="relative">
        <input
          ref={ref}
          {...register}
          {...props}
          className={`form-control ${inputClassName(error as string)}`}
          style={{
            backgroundColor: '#F3F5FA',
            borderRadius: '15px',
            height: '50px',
            padding: '15px !important',
            borderColor: '#F3F5FA'
          }}
          type={changeType}
        />
      </div>

      {passWordValidations?.length ? (
        <div data-testid="input-strength-footer">
          {passWordValidations?.map((data, key) => {
            return renderPasswordsValidations(data.message || '', data.complete || false, key);
          })}
        </div>
      ) : null}

      <ErrorText error={error as string} />
    </div>
  );
};

export const PasswordInput = forwardRef(PasswordInputComponent);
