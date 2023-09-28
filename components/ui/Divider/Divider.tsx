import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Text } from '..';

type DividerType = 'default' | 'link';
type BaseDividerProps = {
  className?: string;
};
type DefaultDividerProps = {
  type?: 'default';
  text: ReactNode;
};
type LinkDividerProps = {
  type?: Exclude<DividerType, 'default'>;
  text?: never;
};
type DividerProps = BaseDividerProps & (DefaultDividerProps | LinkDividerProps);

export const Divider: FC<DividerProps> = ({
  type = 'default',
  text,
  className,
}) => {
  return (
    <div className={clsx('relative', className)}>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-layout-border'></div>
      </div>
      <div className='relative flex justify-center'>
        {type === 'default' ? (
          <Text type='tertiary' className='bg-white px-2'>
            {text}
          </Text>
        ) : (
          <button
            type='button'
            className='inline-flex items-center rounded-full bg-white px-3 py-1 pr-1 text-xs font-medium text-gray-900 elevation-raised hover:bg-gray-50'>
            Show more
            <svg width='24' height='24' fill='none' viewBox='0 0 24 24'>
              <path
                stroke='#64748b'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M15.25 10.75L12 14.25L8.75 10.75'></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
