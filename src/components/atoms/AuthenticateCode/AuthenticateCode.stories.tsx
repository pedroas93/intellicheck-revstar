import type { Meta, StoryObj } from '@storybook/react';

import { AuthenticateCode } from './AuthenticateCode';

const meta: Meta<typeof AuthenticateCode> = {
  title: 'Atoms/AuthenticateCode',
  component: AuthenticateCode,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof AuthenticateCode>;

export const Default: Story = {};
