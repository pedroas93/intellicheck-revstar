// import { Link } from '@tanstack/router';
import type { FC } from 'react';
import React from 'react';

import { MainLayout } from '@/components/templates/MainLayout';

const ForbiddenPage: FC = () => {
  return (
    <MainLayout>
      <div className="d-flex flex-column align-items-center h-100 w-100 bg-white text-primary">
        <div className="text-2xl font-semibold pt-4">403 &nbsp; | &nbsp; PROTECTED PAGE</div>
        <div className="text-gray-300 pt-4">You don’t have permission to access this page</div>
        {/* <Link
      key={'/'}
      className="link-text bg-primary text-white font-semibold rounded-lg w-40  h-8 text-center pt-2 pb-2 px-4 m-2"
      params={{}}
      search={{}}
  >
      Take Me Home
  </Link> */}
        <a href={'/login'}></a>
      </div>
    </MainLayout>
  );
};

export { ForbiddenPage };
