import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  tags: ['autodocs']
  // args: {
  //   children: 'Example',
  //   variant: 'default'
  // }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
