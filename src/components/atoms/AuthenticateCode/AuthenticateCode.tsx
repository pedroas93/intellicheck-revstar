import React from 'react';
import { type FC, useRef } from 'react';
import AuthCode, { type AuthCodeRef } from 'react-auth-code-input';
// import './AuthenticateCode.css';

interface AuthenticateProps {
  handleOnChange?: (result: string) => void | undefined;
  required?: boolean;
  label: string;
}

export const AuthenticateCode: FC<AuthenticateProps> = ({ handleOnChange, required, label }) => {
  const AuthInputRef = useRef<AuthCodeRef>(null);

  return (
    <div className="d-flex flex-column gap-2">
      <div className="font-semibold text-gray-600">
        <div>
          {label} {required && <span className="text-danger">*</span>}
        </div>
      </div>
      <AuthCode
        ref={AuthInputRef}
        onChange={(result: string): void => {
          if (handleOnChange) {
            handleOnChange(result);
          }
        }}
        containerClassName="d-flex gap-2 justify-content-between"
        inputClassName="w-10 h-10 text-24 text-center border bg-gray-200 rounded"
      />
    </div>
  );
};
