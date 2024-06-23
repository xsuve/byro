import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { sizes } from '@/components/ui/theme';
import { textColors } from './Text.types';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Text',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: sizes,
    },
    color: {
      control: { type: 'select' },
      options: textColors,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    size: 'sm',
    color: 'black',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {sizes.map((size) => (
        <Text size={size}>{size}</Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {textColors.map((color) => (
        <Text color={color}>{color}</Text>
      ))}
    </div>
  ),
};
