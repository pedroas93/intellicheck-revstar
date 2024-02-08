'use client';

import { type FC } from 'react';
import React from 'react';

import { CreatePasswordForm } from '@/components/organisms/CreatePassword';

const Register: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <CreatePasswordForm />
    </div>
  );
};

export default Register;
