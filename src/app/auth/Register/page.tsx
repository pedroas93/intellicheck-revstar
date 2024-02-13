'use client';

import { type FC } from 'react';
import React from 'react';

import { RegisterForm } from '@/components/organisms/Register';

const Register: FC = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-3 h-100 w-100">
      <RegisterForm />
    </div>
  );
};

export default Register;
