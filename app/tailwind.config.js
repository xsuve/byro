// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        vermilion: {
          50: 'hsl(var(--vermilion-50))',
          100: 'hsl(var(--vermilion-100))',
          200: 'hsl(var(--vermilion-200))',
          300: 'hsl(var(--vermilion-300))',
          400: 'hsl(var(--vermilion-400))',
          500: 'hsl(var(--vermilion-500))',
          600: 'hsl(var(--vermilion-600))',
          700: 'hsl(var(--vermilion-700))',
          800: 'hsl(var(--vermilion-800))',
          900: 'hsl(var(--vermilion-900))',
          950: 'hsl(var(--vermilion-950))',
        },
        aquamarine: 'hsl(var(--aquamarine))',
        creamy: 'hsl(var(--creamy))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        'space-grotesk': ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    {
      pattern: /(bg|text|border)-(vermilion)/g,
      variants: ['hover', 'focus', '[&>svg]'],
    },
  ],
};
