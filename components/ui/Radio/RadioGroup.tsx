import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type RadioGroupProps = {
  title: string;
  children: ReactNode[];
  className?: string;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <fieldset className={clsx('max-w-xs space-y-5', className)}>
      <legend className='block font-medium leading-5'>{title}</legend>
      {children.map((radio, index) => (
        <div key={index} className='space-y-5'>
          {radio}
        </div>
      ))}
    </fieldset>
  );
};
