/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { zodResolver } from '@hookform/resolvers/zod';
// import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { Message } from 'primereact/message';
import React, { useEffect } from 'react';
import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { LoginTitle } from '@/components/atoms/LoginTitle';

// import type { RegisterFieldsFirstStep } from '../../../types/validations';
import { sendToLocalStorage } from '../../../utils/local-storage';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { registerFields } from '../../../utils/Schemas/input-fields';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RegisterSchema, RegisterSchemaFirstStep } from '../../../utils/Schemas/LoginSchemas';
// import './register.css';

// type LoginData = {
//   email: string;
//   // password: string;
// };

type RegisterFormProps = object;

export const RegisterForm: FC<RegisterFormProps> = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: zodResolver(RegisterSchemaFirstStep)
  });

  const goLogin = (): void => {
    router.push('/login');
  };

  const go2fa = (): void => {
    router.push('CreatePasswordForm');
  };

  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const token = urlParams.get('token');
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmUxMjVhZWItNThjNS00MDlmLWI5ZGQtZDM1ZmZjZmEwYWJhIiwibmFtZSI6ImRhdmlkIiwiZW1haWwiOiJkYXZpZC5wZWRyYXphK3Rlc3QzMEByZXZzdGFyY29uc3VsdGluZy5jb20iLCJyb2xlIjoiY29tcGFueSJ9LCJpYXQiOjE3MDYxMTU4MzUsImV4cCI6MTcwNjExNjA3NX0.DsxDouN2QDheAz6Tgd_MpjyV15fHbwDCDVyHVvnb9Tc';
    if (token) {
      const decodedToken = jwtDecode(token);

      sendToLocalStorage('role', decodedToken?.user?.role);
      sendToLocalStorage('phoneNumber', decodedToken?.user?.phoneNumber);
      sendToLocalStorage('name', decodedToken?.user?.name);
      sendToLocalStorage('emailUser', decodedToken?.user?.email);

      setEmail(decodedToken?.user?.email);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (): Promise<void> => {
    try {
      // console.log('Enter here ?? ', data.password, data.repeatPassword);
      // if(data.password === data.repeatPassword){
      //   const apiUrl = "http://localhost:3000/register";

      //   const credentials = {
      //     userName: "Pedro123",
      //     mail: data.email,
      //     password: data.password,
      //     role: "company",
      //     phoneNumber: "+573106522555"
      //   }

      //   const response = await axios.post(apiUrl, credentials);
      //   console.log("Response Data:", response.data);

      router.push('/secondFARegister');

      // }
    } catch (error) {
      console.error(error);
      setLoginError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container RegisterForm">
      <div className="d-flex flex-column align-items-end gap-3 h-100 w-100">
        <LoginTitle title={'Welcome'} subTitle={'Please enter your login credentials to proceed'}>
          <hr className="w-100" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 h-100 d-flex flex-column justify-content-between"
          >
            <div className="d-flex flex-column justify-content-between w-100 gap-8 textInput">
              {/* <Input
            register={register(registerFields?.email)}
            label="User Name"
            placeholder="User Name"
            required
            error={errors[registerFields?.email]?.message}
          /> */}
              <Input
                // register={register(registerFields?.email)}
                label="Email Address"
                placeholder={email as string}
                // required
                // error={errors[registerFields?.email]?.message}
                readOnly={true}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>
            <div className="d-flex justify-content-between w-100 h-24 my-8">
              <>
                <span className="font-inter text-sm leading-17 tracking--0.7px font-semibold text-gray-600 w-full h-4 text-xs font-normal leading-4 tracking-tighter">
                  Already have an account?
                </span>
                <div
                  onClick={goLogin}
                  className="bg-secondary-200 d-flex items-center justify-end w-100 h-100"
                >
                  <div
                    style={{
                      color: '#0091FC',
                      width: '93px',
                      height: '15px',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '15px',
                      letterSpacing: '-0.02em',
                      textAlign: 'center'
                    }}
                  >
                    Login
                  </div>
                </div>
              </>
            </div>
            <div className="d-flex flex-column gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Create Password"
                className="bg-primary-500 h-12"
                onClick={go2fa}
              />
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
