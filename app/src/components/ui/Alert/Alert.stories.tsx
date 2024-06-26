import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { iconsList } from '../Icon/Icon.types';
import { alertColors } from './Alert.types';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    icon: 'Info',
    title: 'This is an alert',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconsList,
    },
    color: {
      control: { type: 'select' },
      options: alertColors,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    color: 'gray',
  },
};

export const Colors: Story = {
  render: () => (
    <div className='flex flex-col gap-y-6'>
      {alertColors.map((color) => (
        <Alert
          icon='Info'
          title={`This is a ${color} alert`}
          text='Lorem ipsum dolor sit amet consectetur adipiscing elit'
          color={color}
        />
      ))}
    </div>
  ),
};
