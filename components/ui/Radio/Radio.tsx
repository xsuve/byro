import { FC } from 'react';
import clsx from 'clsx';

type BaseRadioProps = {
  name: string;
  value: string;
  helpText?: string;
  checked?: boolean;
  onChange?: () => void;
  className?: string;
};
type DefaultRadioProps = {
  label?: never;
  id?: never;
};
type LabelRadioProps = {
  label?: string;
  id: string;
};
type RadioProps = BaseRadioProps & (DefaultRadioProps | LabelRadioProps);

export const Radio: FC<RadioProps> = ({
  name,
  value,
  label,
  id,
  helpText,
  checked = false,
  onChange,
  className,
}) => {
  return (
    <div className={clsx('relative flex items-start space-x-2.5', className)}>
      <input
        name={name}
        value={value}
        id={id}
        type='radio'
        checked={checked}
        className={clsx(
          'h-4 w-4',
          'rounded-full border-0 shadow-sm text-accent-primary',
          'ring-1 ring-inset',
          'bg-image-checkbox',
          checked ? 'bg-accent-primary' : 'bg-white',
          checked ? 'ring-accent-secondary' : 'ring-gray-300',
          'focus:ring-[3px] focus:outline-none focus:ring-status-new-muted'
        )}
        onChange={onChange}
        readOnly={onChange ? false : true}
      />
      <div className='-mt-[1.5px]'>
        {label !== '' && (
          <label htmlFor={id} className='text-sm primary font-medium'>
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
