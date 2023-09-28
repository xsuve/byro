import { FC, ReactNode, cloneElement, ReactElement } from 'react';
import clsx from 'clsx';

type ButtonGroupProps = {
  children: ReactNode[];
  className?: string;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, className }) => {
  return (
    <div className={clsx('inline-flex rounded elevation', className)}>
      {children.map((button, index) =>
        cloneElement(button as ReactElement, {
          key: index,
          className: clsx(
            index === 0 ? 'rounded-l rounded-r-none' : 'rounded-none -ml-px',
            index === children.length - 1 && 'rounded-r rounded-l-none'
          ),
        })
      )}
    </div>
  );
};
