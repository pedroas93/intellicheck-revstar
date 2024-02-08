import type { Meta, StoryObj } from '@storybook/react';

import { BreadCrumb } from './BreadCrumb';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Atoms/BreadCrumb',
  component: BreadCrumb,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {};
