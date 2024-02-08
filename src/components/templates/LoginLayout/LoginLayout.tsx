import type { FC, ReactNode } from 'react';
import React from 'react';

type Props = {
  children?: ReactNode;
};

export const LoginLayout: FC<Props> = ({ children }) => {
  return (
    <div
      className="flex bg-cover bg-center w-screen h-screen box-border p-6 overflow-auto Login-layout-container"
      data-testid="login-layout-container"
    >
      <div
        className="flex-1 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("src/assets/Images/png/BG.png")' }}
      ></div>
      <div className="container">
        <div
          className="flex flex-col items-center gap-7 p-6 rounded-lg bg-white ml-auto"
          style={{ width: '23.3rem' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
