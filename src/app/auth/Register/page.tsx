'use client';

import { type FC } from 'react';
import React from 'react';

import { RegisterForm } from '@/components/molecules/Register';
import { MainLayout } from '@/components/templates/MainLayout';

const Register: FC = () => {
  return (
    <MainLayout>
      <div className="d-flex flex-column align-items-center gap-3 w-100">
        <RegisterForm />
      </div>
    </MainLayout>
  );
};

export default Register;
