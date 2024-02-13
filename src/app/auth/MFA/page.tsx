'use client';

import { type FC } from 'react';
import React from 'react';

import { SecondFARegister } from '@/components/organisms/SecondFARegister';

const MFA: FC = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-3 h-100 w-100">
      <SecondFARegister />
    </div>
  );
};

export default MFA;
