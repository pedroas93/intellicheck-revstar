// ./src/app/auth/Login/index.tsx

'use client';

import React, { useState } from 'react';

import { LoginForm } from '@/components/organisms/LoginForm';

type LoginData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [loginMfa, setLoginMfa] = useState<boolean>(true);
  const [loginData, setLoginData] = useState<LoginData>();

  const successFirstLogin = (data: LoginData): void => {
    setLoginData(data);
    setLoginMfa(false);
  };

  const localEmail = loginData?.email || '';
  const emailParts = localEmail?.split('@');
  const hiddenEmail = `${emailParts[0]?.replace(
    emailParts[0]?.slice(0, Math.max(0, emailParts[0].length - 4)),
    '*******'
  )}@${emailParts[1]}`;

  // eslint-disable-next-line no-console
  console.log('children --> ', hiddenEmail);

  return (
    <div className="flex flex-col items-center gap-3 h-full w-full">
      {loginMfa ? <LoginForm handleSuccessLogin={successFirstLogin} /> : <p>ERROR PAGE</p>}
    </div>
  );
};

export default Login;
