import type { FC, ReactNode } from 'react';
import React from 'react';

interface LoginTitleProps {
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  variant?: string;
}

export const LoginTitle: FC<LoginTitleProps> = ({ title, subTitle, children }) => {
  return (
    <div className="flex flex-col items-start gap-3 h-full w-full">
      <div className="text-primary-800 text-4xl font-bold leading-normal tracking-wide">
        {title}
        <span className="text-blue-500">!</span>
      </div>
      {subTitle && (
        <div className="text-left text-gray-300 font-normal text-base leading-5 tracking-wide">
          {subTitle}
        </div>
      )}
      <div className="flex flex-col justify-between h-full w-full gap-5">{children}</div>
    </div>
  );
};
