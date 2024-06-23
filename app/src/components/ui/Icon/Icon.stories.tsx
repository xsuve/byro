import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { sizes } from '@/components/ui/theme';
import { iconColors, iconsList } from './Icon.types';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    icon: 'Star',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconsList,
    },
    size: {
      control: { type: 'radio' },
      options: sizes,
    },
    color: {
      control: { type: 'select' },
      options: iconColors,
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
        <Icon icon='Star' size={size} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-x-6'>
      {iconColors.map((color) => (
        <Icon icon='Star' color={color} />
      ))}
    </div>
  ),
};
