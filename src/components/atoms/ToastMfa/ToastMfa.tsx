import type { FC } from 'react';
import React from 'react';

import { Icon } from '@/components/atoms/Icon';

interface LoginTitleProps {
  onClose?: () => void;
}

export const ToastMfa: FC<LoginTitleProps> = ({ onClose }) => {
  return (
    <div className="d-flex items-center rounded-3 w-100 bg-success p-2 px-4 justify-content-between">
      <div className="text-success d-flex gap-1 items-center">
        <Icon name="ok" width="12" color="#00BA35" /> Code Resent!
      </div>
      <div className="text-center text-dark" onClick={onClose}>
        <Icon name="wrong" width="10" color="#00BA35" />
      </div>
    </div>
  );
};
