'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { Shapes, Sizes } from '../theme';
import { cva } from 'class-variance-authority';
import { Text } from '../Text/Text';

const triggerVariants = cva(
  [
    'font-space-grotesk',
    'border border-zinc-300 hover:border-zinc-500',
    'bg-white transition-colors',
    'flex items-center justify-between',
    'w-full min-w-[10rem] placeholder:text-zinc-300',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-300',
    'disabled:cursor-not-allowed disabled:opacity-50',
    '[&>span]:line-clamp-1',
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

const contentVariants = cva(
  [
    'border border-zinc-300',
    'bg-white transition-colors',
    'flex items-center justify-between',
    'w-full',
  ],
  {
    variants: {
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
    },
  }
);

const itemVariants = cva(['font-space-grotesk'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const Root = SelectPrimitive.Root;

const Group = SelectPrimitive.Group;

const Value = SelectPrimitive.Value;

const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn(className)} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className='h-4 w-4 opacity-50' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
Trigger.displayName = SelectPrimitive.Trigger.displayName;

const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}>
    <ChevronUp className='h-4 w-4' />
  </SelectPrimitive.ScrollUpButton>
));
ScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}>
    <ChevronDown className='h-4 w-4' />
  </SelectPrimitive.ScrollDownButton>
));
ScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 overflow-hidden shadow-md',
        'max-h-96 min-w-[8rem]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}>
      <ScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}>
        {children}
      </SelectPrimitive.Viewport>
      <ScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
Content.displayName = SelectPrimitive.Content.displayName;

const Label = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 font-semibold', className)}
    {...props}
  />
));
Label.displayName = SelectPrimitive.Label.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative w-full',
      'flex items-center',
      'focus:bg-accent focus:text-accent-foreground',
      'py-1.5 pl-8 pr-2',
      'cursor-default select-none outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}>
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
Item.displayName = SelectPrimitive.Item.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
Separator.displayName = SelectPrimitive.Separator.displayName;

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectStyleProps {
  size?: Sizes;
  shape?: Shapes;
}

export interface SelectProps extends SelectStyleProps {
  options: SelectOption[];
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  size,
  shape,
  defaultValue = options[0].value,
  disabled = false,
  onChange,
}) => {
  return (
    <div className='flex flex-col gap-y-1'>
      {label && <Text size='sm'>{label}</Text>}
      <Root onValueChange={onChange} defaultValue={defaultValue}>
        <Trigger
          className={cn(triggerVariants({ size, shape }))}
          disabled={disabled}>
          <Value />
        </Trigger>
        <Content className={cn(contentVariants({ shape }))}>
          {options.map((option) => (
            <Item
              key={option.value}
              value={option.value}
              className={cn(itemVariants({ size }))}>
              {option.label}
            </Item>
          ))}
        </Content>
      </Root>
    </div>
  );
};
Select.displayName = 'Select';

export { Select };
