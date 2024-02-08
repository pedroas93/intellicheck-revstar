import type { FC } from 'react';
import React from 'react';
interface Props {
  label?: string;
  required?: boolean;
}

export const Label: FC<Props> = ({ label, required }) => (
  <>
    {label && (
      <div
        className="font-inter text-sm leading-[17px] tracking-[-0.7px] font-semibold"
        style={{
          color: '#4E5771',
          width: '120px',
          height: '15px',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '15px',
          letterSpacing: '-0.02em',
          textAlign: 'left'
        }}
      >
        <div className="flex items-center">
          {label}
          {required && (
            <span className="text-red-ERROR ml-1">
              <span
                style={{ color: '#FF0033' }}
                className="ml-1 w-5 h-15 text-xs font-normal leading-[15px] tracking-[-0.02em] text-left"
              >
                *
              </span>
            </span>
          )}
        </div>
      </div>
    )}
  </>
);
