import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import { sizes } from '@/components/ui/theme';
import { logoColors, logoVariants } from './Logo.types';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {
    variant: 'icon-text',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: logoVariants,
    },
    size: {
      control: { type: 'radio' },
      options: sizes,
    },
    color: {
      control: { type: 'radio' },
      options: logoColors,
    },
    className: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {logoVariants.map((variant) => (
        <Logo variant={variant} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {sizes.map((size) => (
        <Logo size={size} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {logoColors.map((color) => (
        <Logo color={color} />
      ))}
    </div>
  ),
};
