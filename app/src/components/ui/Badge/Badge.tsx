import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/helpers';
import { Shapes, Sizes, Variants, achromaticColors } from '../theme';
import { BadgeColors } from './Badge.types';

const badgeVariants = (color: BadgeColors) =>
  cva(
    [
      'font-space-grotesk font-semibold',
      'inline-flex items-center transition-colors',
    ],
    {
      variants: {
        variant: {
          solid: [
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [`bg-stone-800`, `text-white`],
                  color === 'gray' && [`bg-zinc-500`, `text-white`],
                  color === 'white' && [`bg-white`, `text-stone-950`],
                ]
              : [`bg-${color}-500`, `text-white`],
          ],
          soft:
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [`bg-stone-200`, `text-stone-950`],
                  color === 'gray' && [`bg-zinc-200`, `text-stone-950`],
                  color === 'white' && [`bg-white`, `text-stone-950`],
                ]
              : [`bg-${color}-100`, `text-${color}-500`],
          outline:
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [
                    `border border-stone-800`,
                    `bg-transparent`,
                    `text-stone-950`,
                  ],
                  color === 'gray' && [
                    `border border-zinc-300`,
                    `bg-transparent`,
                    `text-zinc-500`,
                  ],
                  color === 'white' && [
                    `border border-zinc-200`,
                    `bg-transparent`,
                    `text-stone-950`,
                  ],
                ]
              : [
                  `border border-${color}-500`,
                  `bg-transparent`,
                  `text-${color}-500`,
                ],
          ghost:
            // @ts-ignore
            achromaticColors.includes(color)
              ? [
                  color === 'black' && [`bg-transparent`, `text-stone-800`],
                  color === 'gray' && [`bg-transparent`, `text-zinc-500`],
                  color === 'white' && [`bg-transparent`, `text-stone-950`],
                ]
              : [`bg-transparent`, `text-${color}-500`],
        },
        size: {
          xs: ['px-2.5 py-0.5', 'text-xs'],
          sm: ['px-3 py-1', 'text-xs'],
          md: ['px-3.5 py-1', 'text-sm'],
          lg: ['px-4 py-1.5', 'text-sm'],
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
        size: 'xs',
        shape: 'full',
      },
    }
  );

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variants;
  color?: BadgeColors;
  size?: Sizes;
  shape?: Shapes;
}

function Badge({
  className,
  variant,
  size,
  shape,
  color = 'vermilion',
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants(color)({ variant, size, shape }), className)}
      {...props}
    />
  );
}

export { Badge };
