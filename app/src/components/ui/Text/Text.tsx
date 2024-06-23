import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/helpers';
import { Sizes } from '../theme';
import { TextColors, TextSizeElementMap } from './Text.types';

const textVariants = cva(['font-space-grotesk'], {
  variants: {
    size: {
      lg: 'text-lg font-medium tracking-tight',
      md: 'text-base font-medium leading-tight',
      sm: 'text-sm font-medium leading-normal',
      xs: 'text-xs font-normal leading-normal',
    },
    color: {
      black: 'text-stone-950',
      white: 'text-white',
      gray: 'text-zinc-500',
      vermilion: 'text-vermilion-500',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'black',
  },
});

export interface TextStyleProps {
  size?: Sizes;
  color?: TextColors;
}

export interface TextProps
  extends Omit<React.BaseHTMLAttributes<HTMLParagraphElement>, 'color'>,
    TextStyleProps {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, size = 'sm', color, ...props }, ref) => {
    const Comp = TextSizeElementMap[size] as React.ElementType;

    return (
      <Comp
        className={cn(textVariants({ size, className, color }))}
        ref={ref}
        {...props}>
        {children}
      </Comp>
    );
  }
);
Text.displayName = 'Text';

export { Text };
