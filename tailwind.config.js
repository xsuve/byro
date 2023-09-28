/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'baskervville': ['Baskervville', 'sans-serif']
      },
      colors: {
        // Layout
        'layout-background': 'rgb(246, 248, 250)',
        'layout-border': 'rgb(235, 236, 240)',

        // Text
        'primary': 'rgb(17, 24, 39)',
        'secondary': 'rgb(100, 116, 139)',

        // Accent
        'accent-primary': 'rgb(101, 84, 192)',
        'accent-secondary': 'rgb(87, 72, 166)',

        // Status
        'status-danger': 'rgb(239, 68, 68)',
        'status-danger-muted': 'rgb(255, 237, 237)',
        'status-warning': 'rgb(151, 79, 12)',
        'status-warning-muted': 'rgb(255, 247, 214)',
        'status-success': 'rgb(21, 128, 61)',
        'status-success-muted': 'rgb(220, 252, 231)',
        'status-info': 'rgb(12, 102, 228)',
        'status-info-muted': 'rgb(233, 242, 255)',
        'status-new': 'rgb(110, 93, 198)',
        'status-new-muted': 'rgb(243, 240, 255)',
        'status-neutral': 'rgb(68, 84, 111)',
        'status-neutral-muted': 'rgb(241, 242, 244)',

        // Base
        'white': 'rgb(255, 255, 255)'
      },
      backgroundImage: {
        // eslint-disable-next-line quotes
        'image-checkbox': `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // Elevation
        '.elevation-sunken': { '@apply ring-1 ring-inset ring-gray-300 shadow-inner': {} },
        '.elevation': { '@apply shadow-sm': {} },
        '.elevation-containers': { '@apply shadow': {} },
        '.elevation-raised': { '@apply ring-1 ring-inset ring-gray-300 shadow-sm': {} },
        '.elevation-overlay': { '@apply shadow-lg': {} }
      });
    }),
    require('@tailwindcss/forms'),
  ],
};
