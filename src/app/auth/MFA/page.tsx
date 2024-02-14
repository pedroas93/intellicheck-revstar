'use client';

import { type FC } from 'react';
import React from 'react';

import { SecondFARegister } from '@/components/molecules/SecondFARegister';
import { MainLayout } from '@/components/templates/MainLayout';

const MFA: FC = () => {
  return (
    <MainLayout>
      <div className="d-flex flex-column align-items-center gap-3 h-100 w-100">
        <SecondFARegister />
      </div>
    </MainLayout>
  );
};

export default MFA;
