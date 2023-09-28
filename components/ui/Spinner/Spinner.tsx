import { FC } from 'react';
import clsx from 'clsx';

type SpinnerSize = 'default' | 'sm' | 'lg';
type SpinnerColor = 'light' | 'dark';
type SpinnerProps = {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
};

const SpinnerSizeMap = {
  default: 'w-6 h-6',
  sm: 'w-4 h-4',
  lg: 'w-8 h-8',
};
const SpinnerColorMap = {
  light: 'text-white',
  dark: 'text-secondary',
};

export const Spinner: FC<SpinnerProps> = ({
  size = 'default',
  color = 'dark',
  className,
}) => {
  return (
    <svg
      className={clsx(
        'animate-spin',
        SpinnerColorMap[color],
        SpinnerSizeMap[size],
        className
      )}
      fill='none'
      viewBox='0 0 24 24'>
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
    </svg>
  );
};
