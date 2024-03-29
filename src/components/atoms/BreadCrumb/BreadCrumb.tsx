import type { FC } from 'react';
import React from 'react';
import './BreadCrumb.css';

interface LoginTitleProps {
  initialTab?: string;
  actualTab?: string;
}

export const BreadCrumb: FC<LoginTitleProps> = ({ initialTab, actualTab }) => {
  return (
    <div className="breadcrumb-container">
      <div className="d-flex gap-2 rounded-2 text-13">
        <div className="breadcrumb-father">{initialTab?.toUpperCase()}</div>
        <div className="text-black"> {' > '} </div>
        <div className="breadcrumb-children"> {actualTab?.toUpperCase()}</div>
      </div>
    </div>
  );
};
