export const variants = ['solid', 'soft', 'outline', 'ghost'] as const;
export type Variants = (typeof variants)[number];

export const achromaticColors = ['black', 'white', 'gray'] as const;
export type AchromaticColors = (typeof achromaticColors)[number];

export const chromaticColors = ['vermilion', 'aquamarine', 'creamy'] as const;
export type ChromaticColors = (typeof colors)[number];

export const colors = [...achromaticColors, ...chromaticColors] as const;
export type Colors = (typeof colors)[number];

export const sizes = ['xs', 'sm', 'md', 'lg'] as const;
export type Sizes = (typeof sizes)[number];

export const shapes = ['none', 'sm', 'md', 'lg', 'xl', 'full'] as const;
export type Shapes = (typeof shapes)[number];
