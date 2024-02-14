import type { Meta, StoryObj } from '@storybook/react';

import { Login } from './Login';

const meta: Meta<typeof Login> = {
  title: 'Atoms/Login',
  component: Login,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {};
