import { type FC } from 'react';
import React from 'react';

import { UserView } from '@/components/organisms/UserView/UserView';

export const Admin: FC = () => {
  return (
    <div className="flex w-full bg-white justify-center   rounded-3xl h-[100vw] ">
      <div className="flex w-full bg-white justify-center flex-wrap rounded-3xl">
        <UserView />
      </div>
    </div>
  );
};
