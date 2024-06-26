import * as React from 'react';
import { cn } from '@/utils/helpers';
import { cva } from 'class-variance-authority';
import { Shapes, Sizes } from '../theme';
import { Text } from '../Text/Text';

const inputVariants = cva(
  [
    'font-space-grotesk',
    'border border-zinc-300 hover:border-zinc-500',
    'bg-white transition-colors',
    'flex w-full placeholder:text-zinc-300',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-300',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        xs: ['h-8 px-3', 'text-xs'],
        sm: ['h-9 px-4', 'text-sm'],
        md: ['h-10 px-5', 'text-sm'],
        lg: ['h-11 px-6', 'text-base'],
      },
      shape: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      shape: 'md',
      size: 'sm',
    },
  }
);

export interface InputStyleProps {
  size?: Sizes;
  shape?: Shapes;
}

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'onChange'
    >,
    InputStyleProps {
  label?: string;
  onChange?: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, size, shape, onChange, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-y-1'>
        {label && <Text size='sm'>{label}</Text>}
        <input
          type={type}
          className={cn(inputVariants({ size, shape, className }))}
          ref={ref}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
