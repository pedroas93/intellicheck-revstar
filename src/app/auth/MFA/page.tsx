'use client';

import { type FC } from 'react';
import React from 'react';

import { SecondFARegister } from '@/components/organisms/SecondFARegister';

const MFA: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <SecondFARegister />
    </div>
  );
};

export default MFA;
