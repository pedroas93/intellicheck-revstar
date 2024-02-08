import type { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from './DashboardLayout';

const meta: Meta<typeof DashboardLayout> = {
  title: 'Templates/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {};
