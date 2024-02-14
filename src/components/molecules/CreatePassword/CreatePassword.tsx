/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
// import axios from 'axios';
import { Message } from 'primereact/message';
import { type FC, useState } from 'react';
import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/atoms/Button';
import { LoginTitle } from '@/components/atoms/LoginTitle';
import { PasswordInput } from '@/components/atoms/PasswordInput';

import type { PasswordValidations } from '../../../types/validations';
// import { getLocalStorage } from '../../../utils/local-storage';
import { recoveryPasswordField } from '../../../utils/Schemas/input-fields';
import { RecoverySchema } from '../../../utils/Schemas/LoginSchemas';

// type CreatePasswordFormData = {
//   password: string;
//   confirmPassword: string;
// };

type CreatePasswordFormProps = object;

export const CreatePasswordForm: FC<CreatePasswordFormProps> = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  // const [confirmPassword, setConfirmPassword] = useState<string>('');
  // const name = getLocalStorage('name');
  // const phoneNumber = getLocalStorage('phoneNumber');
  // const role = getLocalStorage('role');
  // const emailUser = getLocalStorage('emailUser');
  const [PasswordValidations] = useState<Array<PasswordValidations>>();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: zodResolver(RecoverySchema)
  });

  // const goLogin = (): void => {
  //   router.push('/login');
  // };

  // const go2fa = (): void => {
  //   // const componentName = "CreatePasswordForm";
  //   // void navigate({ to: `/successProcess`, state: { componentName } });
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (): Promise<void> => {
    try {
      // console.log("Enter here");

      // const apiUrl = `http://localhost:3000/complete-registration/`;
      // const apiUrlEmail = 'http://localhost:3000/recovery-password';
      // console.log('What is data ---> ', data);

      // const dataSent = {
      //   name: name,
      //   email: 'david.pedraza+test32@revstarconsulting.com',
      //   phoneNumber: '+573106522555',
      //   password: data.password,
      //   role: role
      // };

      // const emailDataSent = {
      //   email: 'david.pedraza+test32@revstarconsulting.com'
      // };

      // const response = await axios.post(apiUrl, dataSent);
      // const responseEmail = await axios.post(apiUrlEmail, emailDataSent);
      // console.log('Response Data:', response.data);
      router.push('/secondFARegister');
    } catch (error) {
      console.error(error);
      setLoginError('reset-password failed. Please check your credentials.');
    }
  };

  return (
    <div className="container CreatePasswordForm">
      <div className="d-flex flex-column align-items-end gap-3 h-100 w-100">
        <LoginTitle title={'Welcome'} subTitle={'Please enter your login credentials to proceed'}>
          <hr className="w-100" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 h-100 d-flex flex-column justify-content-between"
          >
            <div className="d-flex flex-column justify-content-between w-100 gap-4 textInput">
              <PasswordInput
                register={register(recoveryPasswordField?.password)}
                label="Create Password"
                placeholder="Enter Password"
                required
                error={errors[recoveryPasswordField?.recoveryPassword]?.message}
                passWordValidations={PasswordValidations}
              />
              <PasswordInput
                register={register(recoveryPasswordField?.recoveryPassword)}
                label="Confirm Password"
                placeholder="Enter Password"
                required
                error={errors[recoveryPasswordField?.recoveryPassword]?.message}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>

            <div className="d-flex flex-column gap-1 buttonText">
              <Button type="submit" buttonText="Sign Up" className="bg-primary-500 h-12" />
            </div>
            <div className="d-flex flex-column gap-1">
              {/* <div
            onClick={(): void => {
              signUp();
            }}
            className="bg-secondary-100"
          >
            Sign up
          </div> */}
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
