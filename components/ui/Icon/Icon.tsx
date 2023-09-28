import tailwindConfig from '@/tailwind.config';

type IconSize = 'lg' | 'md' | 'default' | 'sm';
type IconColor = keyof typeof tailwindConfig.theme.extend.colors;
export type IconProps = {
  size?: IconSize;
  color?: IconColor;
  className?: string;
};

export const IconSizeMap = {
  lg: 'w-12 h-12',
  md: 'w-9 h-9',
  default: 'w-6 h-6',
  sm: 'w-5 h-5',
};

export const IconColorMap = tailwindConfig.theme.extend.colors;
