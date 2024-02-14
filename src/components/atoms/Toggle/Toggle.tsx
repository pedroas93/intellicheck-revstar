import React from 'react';
import type { FC } from 'react';
// import './Toggle.css';

interface AvatarProps {
  checked?: boolean;
  onChecked?: (value: boolean) => void;
  checkedClassName?: string;
  label?: string;
  labelClassName?: string;
}

export const Toggle: FC<AvatarProps> = ({
  checked,
  onChecked,
  checkedClassName = 'bg-primary-500',
  label,
  labelClassName = 'text-[13px]'
}) => {
  return (
    <div
      className="d-flex items-center justify-content-between gap-2"
      style={{ alignItems: 'center' }}
    >
      <div className="d-flex items-center">
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={(data) => onChecked?.(data)} />
          <span className={`slider round ${checked ? checkedClassName : ''}`} />
        </label>
      </div>
      {label && (
        <div
          className={labelClassName}
          style={{
            color: '#020E33',
            width: '130px',
            height: '15px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '15px',
            letterSpacing: '-0.02em',
            textAlign: 'left'
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};
