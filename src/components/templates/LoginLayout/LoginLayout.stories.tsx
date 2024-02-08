import type { Meta, StoryObj } from '@storybook/react';

import { LoginLayout } from './LoginLayout';

const meta: Meta<typeof LoginLayout> = {
  title: 'Templates/LoginLayout',
  component: LoginLayout,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof LoginLayout>;

export const Default: Story = {};
