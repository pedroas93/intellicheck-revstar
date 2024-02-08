import type { Meta, StoryObj } from '@storybook/react';

import { ToastMfa } from './ToastMfa';

const meta: Meta<typeof ToastMfa> = {
  title: 'Atoms/ToastMfa',
  component: ToastMfa,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof ToastMfa>;

export const Default: Story = {};
