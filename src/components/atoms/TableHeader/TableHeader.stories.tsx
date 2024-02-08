import type { Meta, StoryObj } from '@storybook/react';

import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Atoms/TableHeader',
  component: TableHeader,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {};
