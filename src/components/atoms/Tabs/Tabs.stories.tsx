import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};
