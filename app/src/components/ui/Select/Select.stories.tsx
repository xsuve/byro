import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from './Select';
import { shapes, sizes } from '../theme';

const selectOptions: SelectOption[] = [
  { value: 'audi', label: 'Audi' },
  { value: 'bmw', label: 'BMW' },
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
];

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: selectOptions,
  },
  argTypes: {
    options: {
      control: { type: 'select' },
      options: selectOptions.map((o) => o.label),
    },
    size: {
      control: { type: 'radio' },
      options: sizes,
    },
    shape: {
      control: { type: 'radio' },
      options: shapes,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    options: selectOptions,
    disabled: false,
  },
};
