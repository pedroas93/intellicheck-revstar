'use client';

import { type FC } from 'react';
import React from 'react';

import { RegisterForm } from '@/components/organisms/Register';

const Register: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <RegisterForm />
    </div>
  );
};

export default Register;
