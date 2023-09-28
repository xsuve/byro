import { FC } from 'react';
import clsx from 'clsx';
import { UseFormRegister } from 'react-hook-form';

type InputSize = 'sm' | 'default' | 'lg' | 'full';
type InputType = 'text' | 'email' | 'password';
type InputProps = {
  type: InputType;
  name: string;
  size?: InputSize;
  label?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  register?: UseFormRegister<any>;
  error?: string;
  success?: string;
  className?: string;
};

const InputSizeMap = {
  sm: 'max-w-[160px]',
  default: 'max-w-xs',
  lg: 'max-w-lg',
  full: 'w-full',
};

export const Input: FC<InputProps> = ({
  type,
  name,
  size = 'default',
  label,
  helpText,
  required = false,
  disabled = false,
  placeholder,
  iconLeft,
  iconRight,
  register,
  error,
  success,
  className,
}) => {
  return (
    <div className={clsx(InputSizeMap[size], className)}>
      {label !== '' && (
        <label
          htmlFor={name}
          className='block text-sm primary font-medium leading-5'>
          {label} {required && <span className='text-status-danger'>*</span>}
        </label>
      )}
      <div className='mt-2 relative'>
        <input
          {...(register ? register(name) : {})}
          name={name}
          type={type}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={clsx(
            'block w-full rounded border-0 py-1.5 shadow-sm',
            iconLeft !== undefined && 'pl-9',
            iconRight !== undefined && 'pr-9',
            'text-sm leading-6 placeholder:text-gray-400',
            'ring-1 ring-inset',
            error || success
              ? error
                ? 'ring-status-danger'
                : 'ring-status-success'
              : 'ring-gray-300',
            'focus:ring-[3px] focus:outline-none focus:ring-accent-secondary',
            disabled && 'cursor-not-allowed bg-layout-border'
          )}
        />
        {error != '' && (
          <p className='text-xs text-status-danger leading-8'>{error}</p>
        )}
        {success != '' && (
          <p className='text-xs text-status-success leading-8'>{success}</p>
        )}
        {(iconLeft !== undefined || iconRight !== undefined) && (
          <div
            className={clsx(
              'absolute top-1.5',
              iconLeft !== undefined && 'left-2',
              iconRight !== undefined && 'right-2'
            )}>
            {iconLeft || iconRight}
          </div>
        )}
      </div>
      {helpText !== '' && (
        <p className='text-xs text-secondary leading-8'>{helpText}</p>
      )}
    </div>
  );
};
