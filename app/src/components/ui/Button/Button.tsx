import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/helpers';
import { Shapes, Sizes, Variants, achromaticColors } from '../theme';
import { ButtonColors } from './Button.types';
import { IconIcons } from '../Icon/Icon.types';
import { Icon } from '../Icon/Icon';

const buttonVariants = (
  color: ButtonColors,
  leftIcon: boolean,
  rightIcon: boolean,
  children: boolean
) =>
  cva(
    [
      'font-space-grotesk font-medium text-sm',
      'inline-flex items-center justify-center',
      'whitespace-nowrap transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      (leftIcon || rightIcon) &&
        !children && ['!w-8 !h-8 !px-0', '[&>svg]:w-5 [&>svg]:h-5'],
    ],
    {
      variants: {
        variant: {
          solid: [
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [
                    `bg-stone-800 hover:bg-stone-950`,
                    `text-white`,
                    `focus-visible:ring-stone-300`,
                    `[&>svg]:text-white`,
                  ],
                  color === 'gray' && [
                    `bg-zinc-500 hover:bg-zinc-600`,
                    `text-white`,
                    `focus-visible:ring-zinc-300`,
                    `[&>svg]:text-white`,
                  ],
                  color === 'white' && [
                    `bg-white`,
                    `text-stone-950`,
                    `[&>svg]:text-stone-950`,
                  ],
                ]
              : [
                  `bg-${color}-500 hover:bg-${color}-600`,
                  `text-white`,
                  `focus-visible:ring-${color}-300`,
                  `[&>svg]:text-white`,
                ],
          ],
          soft:
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [
                    `bg-stone-200 hover:bg-stone-300`,
                    `text-stone-950`,
                    `focus-visible:ring-stone-300`,
                    `[&>svg]:text-stone-950`,
                  ],
                  color === 'gray' && [
                    `bg-zinc-200 hover:bg-zinc-300`,
                    `text-stone-950`,
                    `focus-visible:ring-zinc-300`,
                    `[&>svg]:text-stone-950`,
                  ],
                  color === 'white' && [
                    `bg-white`,
                    `text-stone-950`,
                    `[&>svg]:text-stone-950`,
                  ],
                ]
              : [
                  `bg-${color}-100 hover:bg-${color}-200`,
                  `text-${color}-500`,
                  `focus-visible:ring-${color}-300`,
                  `[&>svg]:text-${color}-500`,
                ],
          outline:
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [
                    `border border-stone-800`,
                    `bg-transparent hover:bg-stone-800`,
                    `text-stone-950 hover:text-white`,
                    `focus-visible:ring-stone-300`,
                    `[&>svg]:text-stone-950 [&>svg]:hover:text-white`,
                  ],
                  color === 'gray' && [
                    `border border-zinc-300 hover:border-zinc-500`,
                    `bg-transparent hover:bg-zinc-500`,
                    `text-zinc-500 hover:text-white`,
                    `focus-visible:ring-zinc-300`,
                    `[&>svg]:text-zinc-500 [&>svg]:hover:text-white`,
                  ],
                  color === 'white' && [
                    `border border-zinc-200 hover:border-zinc-300`,
                    `bg-transparent`,
                    `text-stone-950`,
                    `[&>svg]:text-stone-950`,
                  ],
                ]
              : [
                  `border border-${color}-500`,
                  `bg-transparent hover:bg-${color}-500`,
                  `text-${color}-500 hover:text-white`,
                  `focus-visible:ring-${color}-300`,
                  `[&>svg]:text-${color}-500 [&>svg]:hover:text-white`,
                ],
          ghost:
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [
                    `bg-transparent`,
                    `text-stone-800 hover:text-stone-950`,
                    `focus-visible:ring-stone-300`,
                    `[&>svg]:text-stone-800`,
                  ],
                  color === 'gray' && [
                    `bg-transparent`,
                    `text-zinc-500 hover:text-zinc-600`,
                    `focus-visible:ring-zinc-300`,
                    `[&>svg]:text-zinc-500`,
                  ],
                  color === 'white' && [
                    `bg-transparent`,
                    `text-stone-950`,
                    `[&>svg]:text-stone-950`,
                  ],
                ]
              : [
                  `bg-transparent`,
                  `text-${color}-500 hover:text-${color}-600`,
                  `focus-visible:ring-${color}-300`,
                  `[&>svg]:text-${color}-500`,
                ],
        },
        size: {
          xs: ['h-8 px-3', 'text-xs', '[&>svg]:w-4 [&>svg]:h-4 gap-x-2'],
          sm: ['h-9 px-4', 'text-sm', '[&>svg]:w-5 [&>svg]:h-5 gap-x-2'],
          md: ['h-10 px-5', 'text-sm', '[&>svg]:w-5 [&>svg]:h-5 gap-x-3'],
          lg: ['h-11 px-6', 'text-base', '[&>svg]:w-6 [&>svg]:h-6 gap-x-3'],
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
        variant: 'solid',
        shape: 'md',
        size: 'sm',
      },
    }
  );

export interface ButtonStyleProps {
  variant?: Variants;
  shape?: Shapes;
  size?: Sizes;
  color?: ButtonColors;
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonStyleProps {
  leftIcon?: IconIcons;
  rightIcon?: IconIcons;
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      shape,
      size,
      color = 'vermilion',
      leftIcon,
      rightIcon,
      isLoading = false,
      asChild = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants(
            color,
            Boolean(leftIcon),
            Boolean(rightIcon),
            Boolean(children)
          )({
            variant,
            shape,
            size,
            className,
          })
        )}
        ref={ref}
        {...props}
        disabled={isLoading || disabled}>
        {leftIcon && <Icon icon={leftIcon} />}
        {isLoading && <Icon icon='LoaderCircle' isSpinning={isLoading} />}
        {children}
        {rightIcon && <Icon icon={rightIcon} />}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
