// import Link from 'next/link';
import { ReactNode } from 'react';
import React from 'react';

// import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// const links = [
//   { slug: '/admin', label: 'Login' },
//   { slug: '/', label: 'Home' }
// ];

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children }: MainLayoutProps) => {
  // const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className="container-fluid d-flex w-100 p-3" data-testid="login-layout-container">
      <div
        className="col-md-6 d-flex bg-cover bg-no-repeat bg-center rounded-md"
        style={{
          backgroundImage: 'url("/assets/Images/png/BG.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '98vh'
        }}
      ></div>
      <div
        className="col-md-6 d-flex align-items-center justify-content-center gap-4 p-5 rounded bg-white"
        style={{ padding: '10rem !important' }}
      >
        {children}
      </div>
    </div>
  );
};
