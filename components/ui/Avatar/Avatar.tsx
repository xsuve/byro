import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type AvatarSize = 'default' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarProps = {
  size?: AvatarSize;
  src: string;
  alt: string;
  className?: string;
};

const AvatarSizeMap = {
  default: 'w-6 h-6',
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-24 h-24',
};

export const Avatar: FC<AvatarProps> = ({
  size = 'default',
  src,
  alt,
  className,
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={clsx(AvatarSizeMap[size], 'rounded-full', className)}
    />
  );
};
