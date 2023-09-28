import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type BaseAvatarGroupProps = {
  children: ReactNode[];
  className?: string;
};
type DefaultAvatarGroupProps = {
  max?: never;
  link?: never;
};
type LinkAvatarGroupProps = {
  max?: number;
  link: string;
};
type AvatarGroupProps = BaseAvatarGroupProps &
  (DefaultAvatarGroupProps | LinkAvatarGroupProps);

export const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  max = 3,
  link,
  className,
}) => {
  return (
    <div className={clsx('flex -space-x-1', className)}>
      {children.length > max ? (
        <>
          {children.slice(0, children.length - (children.length - max))}
          <a
            className='flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-slate-500 rounded-full hover:bg-gray-600'
            href={link}>
            +{children.length - max}
          </a>
        </>
      ) : (
        children
      )}
    </div>
  );
};
