/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { zodResolver } from '@hookform/resolvers/zod';
// import axios from 'axios';
import { useRouter } from 'next/navigation';
import { type FC, useState } from 'react';
import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/atoms/Button';
import { LoginTitle } from '@/components/atoms/LoginTitle';

// import type { LoginFields } from '../../../types/Validations';
import { LoginSchema } from '../../../utils/Schemas/LoginSchemas';
import './SuccessProcess.css';
// import DigitalKey from "../../../../assets/Images/png/DigitalKey.png";

type SuccessProcess = object;

export const SuccessProcess: FC<SuccessProcess> = () => {
  const navigate = useRouter();
  const [, setLoginError] = useState<string | null>(null);
  const {
    // register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema)
  });

  // const goLogin = (): void => {
  //   navigate.push('/forgotPassword');
  // };

  const go2fa = (): void => {
    navigate.push('/auth/Login');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (): Promise<void> => {
    try {
      // const apiUrl = 'https://authsystem-ysxx.onrender.com/login';
      // const credentials = {
      //   userName: 'juanperez',
      //   password: '123password093'
      // };
      // const response = await axios.post(apiUrl, credentials);
    } catch (error) {
      console.error(error);
      setLoginError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container SuccessProcess">
      <div className="d-flex flex-column items-end gap-3 h-100 w-100">
        <LoginTitle
          title={'Success'}
          subTitle={'The process was completed successfully, you can now login'}
        >
          <hr className="w-100" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 h-100 d-flex flex-column justify-content-between"
          >
            <div className="d-flex justify-content-center align-items-center">
              <img src={'/assets/Images/png/DigitalKey.png'} alt="Description of the Image" />
            </div>

            <div className="d-flex flex-column gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Login"
                className="bg-primary-500 h-12"
                onClick={(): void => {
                  go2fa();
                }}
              />
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
