'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { Text } from '../Text/Text';

const Comp = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm',
        'border border-zinc-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-300',
        'data-[state=checked]:bg-vermilion-500 data-[state=checked]:border-vermilion-500 data-[state=checked]:text-white',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}>
        <Check className='h-4 w-4' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

export interface CheckboxProps {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  checked = false,
  onChange,
  ...props
}) => {
  return (
    <div className='flex items-center gap-x-3'>
      <Comp
        id={id}
        checked={checked}
        onCheckedChange={(checked) => onChange?.(Boolean(checked))}
        {...props}
      />
      {label && (
        <Text size='sm' htmlFor={id}>
          {label}
        </Text>
      )}
    </div>
  );
};
Checkbox.displayName = 'Checkbox';

export { Checkbox };
