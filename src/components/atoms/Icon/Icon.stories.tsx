import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
