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
    <div className="d-flex flex-column items-start h-100 w-100">
      <div className="text-primary-800 display-4 fw-bold lh-base tracking-wide">
        {title}
        <span className="text-primary">!</span>
      </div>
      {subTitle && (
        <div
          className="font-inter text-sm leading-17 tracking--0.7px font-semibold text-gray-600 w-full h-4 text-xs font-normal leading-4 tracking-tighter"
          style={{ color: '#B4B7C2', fontSize: '16px' }}
        >
          {subTitle}
        </div>
      )}
      <div className="d-flex flex-column justify-content-between h-100 w-100 gap-2">{children}</div>
    </div>
  );
};
