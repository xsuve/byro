import { achromaticColors } from '../theme';

export const logoVariants = ['icon', 'text', 'icon-text'] as const;
export type LogoVariants = (typeof logoVariants)[number];

export const logoColors = [...achromaticColors, 'vermilion'] as const;
export type LogoColors = (typeof logoColors)[number];
