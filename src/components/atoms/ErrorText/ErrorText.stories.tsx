import type { Meta, StoryObj } from '@storybook/react';

import { ErrorText } from './ErrorText';

const meta: Meta<typeof ErrorText> = {
  title: 'Atoms/ErrorText',
  component: ErrorText,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof ErrorText>;

export const Default: Story = {};
