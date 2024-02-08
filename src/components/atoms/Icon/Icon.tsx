import React from 'react';
import type { FC } from 'react';

import Filter from '../../../../public/assets/Icons/Filter';

export const ICONS = {
  filter: Filter
};

export interface IconProps {
  color?: string;
  height?: string;
  name: keyof typeof ICONS;
  width?: string;
}

export const Icon: FC<IconProps> = (props) => {
  const IconComponent = ICONS[props.name];

  return IconComponent ? (
    <div {...props}>
      <IconComponent {...props} />
    </div>
  ) : (
    <></>
  );
};
