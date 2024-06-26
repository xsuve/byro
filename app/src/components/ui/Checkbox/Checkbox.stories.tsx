import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    checked: false,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    id: 'checkbox1',
    label: 'Check this checkbox',
  },
};
