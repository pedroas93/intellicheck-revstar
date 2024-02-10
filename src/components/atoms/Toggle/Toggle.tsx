import React from 'react';
import type { FC } from 'react';
// import './Toggle.css';

interface AvatarProps {
  checked?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChecked?: (value: any) => void;
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
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center">
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
            width: '93px',
            height: '15px',
            fontSize: '12px',
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
