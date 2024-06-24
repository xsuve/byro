import { achromaticColors } from '../theme';

export const badgeColors = [...achromaticColors, 'vermilion'] as const;
export type BadgeColors = (typeof badgeColors)[number];
