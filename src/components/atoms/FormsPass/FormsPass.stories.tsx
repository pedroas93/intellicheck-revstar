import type { Meta, StoryObj } from '@storybook/react';

import { FormsPass } from './FormsPass';

const meta: Meta<typeof FormsPass> = {
  title: 'Atoms/FormsPass',
  component: FormsPass,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof FormsPass>;

export const Default: Story = {};
