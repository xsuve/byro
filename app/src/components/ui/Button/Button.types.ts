import { achromaticColors } from '../theme';

export const buttonColors = [...achromaticColors, 'vermilion'] as const;
export type ButtonColors = (typeof buttonColors)[number];
