import type { Meta, StoryObj } from '@storybook/react';

import { LoginTitle } from './LoginTitle';

const meta: Meta<typeof LoginTitle> = {
  title: 'Atoms/LoginTitle',
  component: LoginTitle,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof LoginTitle>;

export const Default: Story = {};
