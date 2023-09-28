import { FC } from 'react';
import clsx from 'clsx';
import { UseFormRegister } from 'react-hook-form';

type TextareaSize = 'sm' | 'default' | 'lg' | 'full' | 'tall';
type TextareaProps = {
  name: string;
  size?: TextareaSize;
  label?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  register?: UseFormRegister<any>;
  error?: string;
  success?: string;
  className?: string;
};

const TextareaSizeMap = {
  sm: 'max-w-[160px]',
  default: 'max-w-xs',
  lg: 'max-w-lg',
  full: 'w-full',
  tall: 'max-w-xs',
};

export const Textarea: FC<TextareaProps> = ({
  name,
  size = 'default',
  label,
  helpText,
  required = false,
  disabled = false,
  placeholder,
  register,
  error,
  success,
  className,
}) => {
  return (
    <div className={clsx(TextareaSizeMap[size], className)}>
      {label !== '' && (
        <label
          htmlFor={name}
          className='block text-sm primary font-medium leading-5'>
          {label} {required && <span className='text-status-danger'>*</span>}
        </label>
      )}
      <div className='mt-2 relative'>
        <textarea
          {...(register ? register(name) : {})}
          name={name}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={clsx(
            size === 'tall' ? 'h-32' : '',
            'block w-full rounded border-0 py-1.5 shadow-sm',
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
      </div>
      {helpText !== '' && (
        <p className='text-xs text-secondary leading-8'>{helpText}</p>
      )}
    </div>
  );
};
