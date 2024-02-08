'use client';

import { type FC } from 'react';
import React from 'react';

import { SuccessProcess } from '@/components/organisms/SuccessProcess';

const Register: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <SuccessProcess />
    </div>
  );
};

export default Register;
