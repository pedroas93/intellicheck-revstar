'use client';

import { type FC } from 'react';
import React from 'react';

import { CreatePasswordForm } from '@/components/organisms/CreatePassword';
import { MainLayout } from '@/components/templates/MainLayout';

const Register: FC = () => {
  return (
    <MainLayout>
      <div className="d-flex flex-column align-items-center gap-3 h-100 w-100">
        <CreatePasswordForm />
      </div>
    </MainLayout>
  );
};

export default Register;
