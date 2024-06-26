import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/helpers';
import { Sizes } from '../theme';
import { IconColors, IconIcons } from './Icon.types';
import { LucideProps, icons } from 'lucide-react';

const iconVariants = (isSpinning: boolean) =>
  cva(['transition-colors', isSpinning && 'animate-spin'], {
    variants: {
      size: {
        lg: 'w-10 h-10',
        md: 'w-8 h-8',
        sm: 'w-6 h-6',
        xs: 'w-4 h-4',
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

export interface IconStyleProps {
  size?: Sizes;
  color?: IconColors;
}

export interface IconProps
  extends IconStyleProps,
    Omit<LucideProps, 'size' | 'color'> {
  icon: IconIcons;
  isSpinning?: boolean;
}

const Icon: React.FC<IconProps> = ({
  icon,
  className,
  size = 'sm',
  color = 'vermilion',
  isSpinning = false,
  ...props
}) => {
  const Comp = icons[icon];

  return (
    <Comp
      className={cn(iconVariants(isSpinning)({ size, className, color }))}
      {...props}
    />
  );
};
Icon.displayName = 'Icon';

export { Icon };
