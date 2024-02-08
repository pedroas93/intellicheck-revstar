import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
