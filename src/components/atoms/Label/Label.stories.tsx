import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};
