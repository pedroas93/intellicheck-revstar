/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { zodResolver } from '@hookform/resolvers/zod';
// import { useNavigate } from '@tanstack/router';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Message } from 'primereact/message';
import { type FC, useState } from 'react';
import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { LoginTitle } from '@/components/atoms/LoginTitle';
import { PasswordInput } from '@/components/atoms/PasswordInput';
import { Toggle } from '@/components/atoms/Toggle';

import type { LoginFields } from '../../../types/Validations';
import { loginFields } from '../../../utils/Schemas/input-fields';
import { LoginSchema } from '../../../utils/Schemas/LoginSchemas';

type LoginData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  handleSuccessLogin?: (data: LoginData) => void;
};

export const LoginForm: FC<LoginFormProps> = () => {
  const router = useRouter();

  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema)
  });

  const handleForgotPassword = (): void => {
    router.push('/forgotPassword');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (data: LoginFields): Promise<void> => {
    try {
      const apiUrl = 'http://localhost:3000/login';

      const response = await axios.post(apiUrl, data);

      if (response.data.role === 'superAdmin') {
        // const componentName = 'Login';
        // void navigate({ to: `/secondFAAdmina`, state: { componentName } });
      } else {
        // void navigate({ to: `/homeUser` });
      }
    } catch (error) {
      console.error(error);
      setLoginError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container LoginForm">
      <div className="d-flex flex-column align-items-end gap-3 h-100 w-100">
        <LoginTitle title={'Welcome'} subTitle={'Please enter your login credentials to proceed'}>
          <hr className="w-100" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 h-100 d-flex flex-column justify-content-between"
          >
            <div className="d-flex flex-column justify-content-between w-100 gap-3 textInput">
              <Input
                register={register(loginFields?.email as string)}
                label="Email Address"
                placeholder="Enter Email Address"
                required
                error={errors[loginFields?.email as string]?.message}
              />
              <PasswordInput
                register={register(loginFields?.password)}
                label="Password"
                placeholder="Enter Password"
                required
                error={errors[loginFields?.password]?.message}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>
            <div className="d-flex justify-content-between w-100 h-24 py-4">
              <Toggle
                checked={false}
                checkedClassName="bg-success"
                label="Remember Me"
                labelClassName="font-inter text-sm leading-17 tracking--0.7px font-semibold text-gray-600 w-24 h-4 text-xs font-normal leading-4 tracking-tighter"
              />
              <div onClick={handleForgotPassword} className="d-flex justify-end">
                <div
                  style={{
                    color: '#0091FC',
                    width: '130px',
                    height: '15px',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '15px',
                    letterSpacing: '-0.02em',
                    textAlign: 'right'
                  }}
                >
                  Forgot Password
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-1 buttonText">
              <Button type="submit" buttonText="Login" className="bg-primary-500 h-12" />
            </div>
            <div className="d-flex flex-column gap-1">
              {/* <div onClick={signUp} className="bg-secondary-100">Sign up</div> */}
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
