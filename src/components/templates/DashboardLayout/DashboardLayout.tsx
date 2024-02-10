import React from 'react';
import type { FC } from 'react';

import { TableComponent } from '../../components/UserTable/UserTable';

export const Admin: FC = () => {
  return (
    <div className="flex w-full bg-white justify-center   rounded-3xl h-[100vw] ">
      <div className="flex w-full bg-white justify-center flex-wrap rounded-3xl">
        <TableComponent />
        {/* <span style={{ color: "red" }}>HELLO???</span> */}
      </div>
    </div>
  );
};
