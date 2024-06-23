import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { shapes, sizes, variants } from '@/components/ui/theme';
import { buttonColors } from './Button.types';
import { iconsList } from '../Icon/Icon.types';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
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
      options: buttonColors,
    },
    leftIcon: {
      control: { type: 'select' },
      options: iconsList,
    },
    rightIcon: {
      control: { type: 'select' },
      options: iconsList,
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    variant: 'solid',
    size: 'sm',
    shape: 'md',
    color: 'vermilion',
    asChild: false,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {variants.map((variant) => (
        <Button variant={variant}>{variant}</Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {sizes.map((size) => (
        <Button size={size}>{size}</Button>
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {shapes.map((shape) => (
        <Button shape={shape}>{shape}</Button>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {buttonColors.map((color) => (
        <Button color={color}>{color}</Button>
      ))}
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div className='flex flex-col gap-y-6'>
      <div className='flex gap-x-6'>
        <Button leftIcon='Star'>Left icon</Button>
        <Button rightIcon='Star'>Right icon</Button>
        <Button leftIcon='Star' />
      </div>
      <div className='flex gap-x-6'>
        {shapes.map((shape) => (
          <Button leftIcon='Star' shape={shape} />
        ))}
      </div>
    </div>
  ),
};

export const LoadingDisabled: Story = {
  name: 'Loading & Disabled',
  render: () => (
    <div className='flex gap-x-6'>
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
