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
    <div className="d-flex flex-column items-start gap-3 h-100 w-100">
      <div className="text-primary-800 text-4xl font-bold leading-normal tracking-wide">
        {title}
        <span className="text-primary">!</span>
      </div>
      {subTitle && (
        <div className="text-left text-gray-300 font-normal text-base leading-5 tracking-wide">
          {subTitle}
        </div>
      )}
      <div className="d-flex flex-column justify-content-between h-100 w-100 gap-4">{children}</div>
    </div>
  );
};
