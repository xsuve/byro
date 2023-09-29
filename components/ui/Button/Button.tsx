import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonType = 'button' | 'submit';
type ButtonColor = 'primary' | 'secondary' | 'vermilion';
type ButtonProps = {
  type?: ButtonType;
  color?: ButtonColor;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const ButtonColorMap = {
  primary: {
    text: 'text-white',
    background: 'bg-primary hover:bg-primary/95',
    other: 'focus:ring-primary focus:ring-[3px] focus:outline-none',
  },
  secondary: {
    text: 'text-primary',
    background: 'bg-white hover:bg-layout-background',
    other: 'shadow-sm ring-1 ring-inset ring-gray-300',
  },
  vermilion: {
    text: 'text-white',
    background: 'bg-vermilion hover:bg-vermilion',
    other: 'focus:ring-vermilion focus:ring-[3px] focus:outline-none',
  },
};

export const Button: FC<ButtonProps> = ({
  type = 'button',
  color = 'primary',
  iconLeft,
  iconRight,
  children,
  disabled = false,
  onClick,
  className,
}) => {
  const handleButtonPadding = (
    hasIconLeft: boolean,
    hasIconRight: boolean,
    hasChildren: boolean
  ) => {
    if (hasIconLeft) {
      return hasIconRight
        ? 'px-1.5 py-1.5'
        : hasChildren
        ? 'px-1.5 pr-3 py-1.5'
        : 'px-2 py-2';
    } else if (hasIconRight) {
      return hasChildren ? 'px-1.5 pl-3 py-1.5' : 'px-1.5 py-1.5';
    } else {
      return hasChildren ? 'px-6 py-3' : 'px-2 py-2';
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        handleButtonPadding(
          iconLeft !== undefined,
          iconRight !== undefined,
          children !== undefined
        ),
        disabled
          ? 'text-secondary bg-layout-border cursor-not-allowed'
          : Object.values(ButtonColorMap[color]).join(' '),
        'font-medium rounded-full text-sm text-center',
        'inline-flex items-center',
        className
      )}
    >
      {iconLeft}
      {children !== undefined && (
        <span
          className={clsx(
            'py-1',
            iconLeft !== undefined && 'ml-0.5',
            iconRight !== undefined && 'mr-0.5'
          )}
        >
          {children}
        </span>
      )}
      {iconRight}
    </button>
  );
};
