import { type FC } from 'react';
import React from 'react';

import { UserView } from '@/components/molecules/UserView/UserView';

export const Admin: FC = () => {
  return (
    <div className="d-flex w-100 bg-white justify-content-center rounded-3">
      <div className="d-flex w-100 bg-white justify-content-center flex-wrap rounded-3">
        <UserView />
      </div>
    </div>
  );
};
