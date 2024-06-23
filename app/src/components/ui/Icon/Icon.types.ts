import { achromaticColors } from '../theme';
import { icons } from 'lucide-react';

export const iconsList = Object.keys(icons);

export type IconIcons = keyof typeof icons;

export const iconColors = [...achromaticColors, 'vermilion'] as const;
export type IconColors = (typeof iconColors)[number];
