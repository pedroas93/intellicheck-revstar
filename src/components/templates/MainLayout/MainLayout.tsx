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
    <div
      className="d-flex bg-cover bg-center w-100 h-100 p-6 overflow-auto Login-layout-container"
      data-testid="login-layout-container"
    >
      <div
        className="flex-1 bg-cover bg-no-repeat bg-center rounded-md"
        style={{ backgroundImage: 'url("/assets/Images/png/BG.png")' }}
      ></div>
      <div className="flex-1 d-flex align-items-center justify-content-center container gap-7 p-6 rounded-lg bg-white ms-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};
