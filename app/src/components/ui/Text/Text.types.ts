import { Sizes, achromaticColors } from '../theme';

export const textColors = [...achromaticColors, 'vermilion'] as const;
export type TextColors = (typeof textColors)[number];

export const TextSizeElementMap: Record<Sizes, string> = {
  lg: 'h1',
  md: 'h5',
  sm: 'p',
  xs: 'label',
};
