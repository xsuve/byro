import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type CheckboxGroupProps = {
  title: string;
  children: ReactNode[];
  className?: string;
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <fieldset className={clsx('max-w-xs space-y-5', className)}>
      <legend className='block font-medium leading-5'>{title}</legend>
      {children.map((checkbox, index) => (
        <div key={index} className='space-y-5'>
          {checkbox}
        </div>
      ))}
    </fieldset>
  );
};
