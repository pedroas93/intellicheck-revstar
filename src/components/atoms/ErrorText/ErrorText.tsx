import type { FC } from 'react';

interface Props {
  error?: string;
}

export const ErrorText: FC<Props> = ({ error }) => (
  <>
    {error && (
      <div className="font-inter text-13 leading-4 tracking--0.7px text-danger">{error}</div>
    )}
  </>
);
