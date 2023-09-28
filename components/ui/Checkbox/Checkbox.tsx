import { FC } from 'react';
import clsx from 'clsx';

type CheckboxProps = {
  name: string;
  label?: string;
  helpText?: string;
  checked?: boolean;
  onChange?: () => void;
  className?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  helpText,
  checked = true,
  onChange,
  className,
}) => {
  return (
    <div className={clsx('relative flex items-start space-x-2.5', className)}>
      <input
        name={name}
        id={name}
        type='checkbox'
        checked={checked}
        className={clsx(
          'h-4 w-4',
          'rounded border-0 shadow-sm text-accent-primary',
          'ring-1 ring-inset',
          checked ? 'ring-accent-secondary' : 'ring-gray-300',
          'focus:ring-[3px] focus:outline-none focus:ring-status-new-muted'
        )}
        onChange={onChange}
        readOnly={onChange ? false : true}
      />
      <div className='-mt-[1.5px]'>
        {label !== '' && (
          <label htmlFor={name} className='text-sm primary font-medium'>
            {label}
          </label>
        )}
        {helpText !== '' && (
          <p className='text-xs text-secondary leading-6'>{helpText}</p>
        )}
      </div>
    </div>
  );
};
