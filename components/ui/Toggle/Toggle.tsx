import { FC } from 'react';
import clsx from 'clsx';

type ToggleSize = 'default' | 'sm';
type ToggleProps = {
  size?: ToggleSize;
  toggled?: boolean;
  onClick?: () => void;
  className?: string;
};

const ToggleSizeMap = {
  default: {
    wrapper: 'h-6 w-11',
    thumb: 'h-5 w-5',
    translateX: 'translate-x-5',
  },
  sm: {
    wrapper: 'h-4 w-7',
    thumb: 'h-3 w-3',
    translateX: 'translate-x-3',
  },
};

export const Toggle: FC<ToggleProps> = ({
  size = 'default',
  toggled = true,
  onClick,
  className,
}) => {
  return (
    <button
      type='button'
      className={clsx(
        toggled ? 'bg-accent-primary' : 'bg-gray-400',
        ToggleSizeMap[size].wrapper,
        'relative inline-flex flex-shrink-0 cursor-pointer rounded-full',
        'border-2 border-transparent',
        'transition-colors duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2',
        className
      )}
      role='switch'
      aria-checked={toggled}
      onClick={onClick}>
      <span className='sr-only'>Text</span>
      <span
        aria-hidden='true'
        className={clsx(
          toggled ? ToggleSizeMap[size].translateX : 'translate-x-0',
          ToggleSizeMap[size].thumb,
          'bg-white shadow ring-0',
          'pointer-events-none inline-block transform rounded-full',
          'transition duration-200 ease-in-out'
        )}></span>
    </button>
  );
};
