'use client';

import { type FC } from 'react';
import React from 'react';

import { ForgotPasswordForm } from '@/components/molecules/ForgotPassword';
import { MainLayout } from '@/components/templates/MainLayout';

const ForgotPassword: FC = () => {
  return (
    <MainLayout>
      <div className="d-flex flex-column align-items-center gap-3 h-100 w-100">
        <ForgotPasswordForm />
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;
