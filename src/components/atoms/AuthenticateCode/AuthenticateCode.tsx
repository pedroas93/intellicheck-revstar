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
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-gray-600 ">
        <div>
          {label} {required && <span className="text-red-ERROR">*</span>}
        </div>
      </div>
      <AuthCode
        ref={AuthInputRef}
        onChange={(result: string): void => {
          if (handleOnChange) {
            handleOnChange(result);
          }
        }}
        containerClassName="flex gap-2 justify-between"
        inputClassName="w-10 h-10 text-24 text-center  border bg-gray-200 rounded"
      />
    </div>
  );
};
