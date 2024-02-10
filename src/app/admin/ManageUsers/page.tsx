'use client';

import { type FC } from 'react';
import React from 'react';

import { Table } from '@/components/organisms/Table';

const Dashboard: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <Table />
    </div>
  );
};

export default Dashboard;
