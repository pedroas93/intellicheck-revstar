import type { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Atoms/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};
