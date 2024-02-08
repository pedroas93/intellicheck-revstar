import type { Meta, StoryObj } from '@storybook/react';

import { ErrorFallback } from './ErrorFallback';

const meta: Meta<typeof ErrorFallback> = {
  title: 'Atoms/ErrorFallback',
  component: ErrorFallback,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {};
