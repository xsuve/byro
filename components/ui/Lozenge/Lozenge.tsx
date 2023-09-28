import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type LozengeType = 'default' | 'bold';
type LozengeColor =
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'new'
  | 'neutral';
type LozengeProps = {
  type?: LozengeType;
  color: LozengeColor;
  children: ReactNode;
  className?: string;
};

const LozengeColorMap = {
  danger: {
    default: 'text-status-danger bg-status-danger-muted',
    bold: 'text-white bg-status-danger',
  },
  warning: {
    default: 'text-status-warning bg-status-warning-muted',
    bold: 'text-white bg-status-warning',
  },
  success: {
    default: 'text-status-success bg-status-success-muted',
    bold: 'text-white bg-status-success',
  },
  info: {
    default: 'text-status-info bg-status-info-muted',
    bold: 'text-white bg-status-info',
  },
  new: {
    default: 'text-status-new bg-status-new-muted',
    bold: 'text-white bg-status-new',
  },
  neutral: {
    default: 'text-status-neutral bg-status-neutral-muted',
    bold: 'text-white bg-status-neutral',
  },
};

export const Lozenge: FC<LozengeProps> = ({
  type = 'default',
  color,
  children,
  className,
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-2xl px-2 py-0.5 font-semibold text-xs',
        LozengeColorMap[color][type],
        className
      )}>
      {children}
    </span>
  );
};
