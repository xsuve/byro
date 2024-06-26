import { achromaticColors } from '../theme';

export const alertColors = [...achromaticColors, 'vermilion'] as const;
export type AlertColors = (typeof alertColors)[number];
