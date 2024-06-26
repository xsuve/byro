import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/helpers';
import { Sizes } from '../theme';
import { TextColors, TextSizeElementMap } from './Text.types';
import { Link } from 'react-router-dom';

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
    TextStyleProps {
  link?: string;
  htmlFor?: string;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { children, link, className, htmlFor, size = 'sm', color, ...props },
    ref
  ) => {
    const Comp = htmlFor
      ? 'label'
      : (TextSizeElementMap[size] as React.ElementType);

    if (link) {
      return (
        <Link to={link}>
          <Comp
            className={cn(
              textVariants({ size, className, color }),
              htmlFor && 'cursor-pointer'
            )}
            ref={ref}
            htmlFor={htmlFor}
            {...props}>
            {children}
          </Comp>
        </Link>
      );
    }

    return (
      <Comp
        className={cn(
          textVariants({ size, className, color }),
          htmlFor && 'cursor-pointer'
        )}
        ref={ref}
        htmlFor={htmlFor}
        {...props}>
        {children}
      </Comp>
    );
  }
);
Text.displayName = 'Text';

export { Text };
