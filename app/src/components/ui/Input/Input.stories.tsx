import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { shapes, sizes } from '@/components/ui/theme';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Input',
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
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
    size: 'sm',
    shape: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {sizes.map((size) => (
        <Input size={size} placeholder={size} />
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {shapes.map((shape) => (
        <Input shape={shape} placeholder={shape} />
      ))}
    </div>
  ),
};
