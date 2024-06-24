import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { shapes, sizes, variants } from '@/components/ui/theme';
import { badgeColors } from './Badge.types';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: variants,
    },
    size: {
      control: { type: 'radio' },
      options: sizes,
    },
    shape: {
      control: { type: 'radio' },
      options: shapes,
    },
    color: {
      control: { type: 'select' },
      options: badgeColors,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    variant: 'solid',
    size: 'xs',
    shape: 'full',
    color: 'vermilion',
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {variants.map((variant) => (
        <Badge variant={variant}>{variant}</Badge>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-start gap-x-6'>
      {sizes.map((size) => (
        <Badge size={size}>Badge</Badge>
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {shapes.map((shape) => (
        <Badge shape={shape}>{shape}</Badge>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {badgeColors.map((color) => (
        <Badge color={color}>{color}</Badge>
      ))}
    </div>
  ),
};
