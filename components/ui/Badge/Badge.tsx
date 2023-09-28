import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeColor = 'danger' | 'warning' | 'success' | 'info' | 'new' | 'neutral';
type BadgeProps = {
  size: BadgeSize;
  color: BadgeColor;
  children: ReactNode;
  className?: string;
};

const BadgeSizeMap = {
  sm: 'right-[-1px] top-[-1px] w-2.5 h-2.5',
  md: 'right-0 top-0 block h-3 w-3',
  lg: 'right-1 top-1 block h-3.5 w-3.5',
};
const BadgeColorMap = {
  danger: 'bg-status-danger',
  warning: 'bg-status-warning',
  success: 'bg-status-success',
  info: 'bg-status-info',
  new: 'bg-status-new',
  neutral: 'bg-status-neutral',
};

export const Badge: FC<BadgeProps> = ({ size, color, children, className }) => {
  return (
    <div className={clsx('relative', className)}>
      {children}
      <span
        className={clsx(
          'absolute border-2 border-white rounded-full',
          BadgeSizeMap[size],
          BadgeColorMap[color]
        )}></span>
    </div>
  );
};
