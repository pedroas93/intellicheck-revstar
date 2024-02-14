/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { zodResolver } from '@hookform/resolvers/zod';
// import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Message } from 'primereact/message';
import React from 'react';
import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { LoginTitle } from '@/components/atoms/LoginTitle';

import { forgotPasswordField } from '../../../utils/Schemas/input-fields';
import { ForgotPasswordSchema } from '../../../utils/Schemas/LoginSchemas';

type ForgotPasswordFormProps = object;

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = () => {
  const navigate = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: zodResolver(ForgotPasswordSchema)
  });

  const goLogin = (): void => {
    navigate.push('/login');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (): Promise<void> => {
    try {
      // const apiUrl = 'http://localhost:3000/recovery-password';

      // const response = await axios.post(apiUrl, data);
      navigate.push(`/reset-password-mfa`);
    } catch (error) {
      console.error(error);
      setLoginError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="ForgotPasswordForm">
      <div className="flex flex-col items-right  gap-3 h-full w-full">
        <LoginTitle
          title={'Forgot Password !'}
          subTitle={'Please enter your email to receive a reset link'}
        >
          <hr className=" w-full" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex  flex-col justify-between w-full  gap-8 textInput">
              <Input
                register={register(forgotPasswordField?.email as string)}
                label="Email Address"
                placeholder="Enter Email Address"
                required
                error={errors[forgotPasswordField?.email as string]?.message}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>
            <div className="flex flex-col gap-1 buttonText">
              <Button type="submit" buttonText="Reset" className="bg-primary-500 h-12" />
            </div>
            <div className="flex flex-col gap-1">
              <div
                onClick={(): void => {
                  goLogin();
                }}
                className="bg-secundary-100"
              >
                Back
              </div>
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
