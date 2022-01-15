/* eslint-disable global-require, import/no-extraneous-dependencies, unicorn/prefer-module, sonarjs/no-duplicate-string */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#52BBAB',
        },
        secondary: {
          DEFAULT: '#fced00',
        },
        dark: {
          DEFAULT: '#272525',
        },
        light: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontWeight: theme('fontWeight.semibold'),
            },
            h2: {
              fontSize: theme('fontSize.4xl'),
              lineHeight: theme('lineHeight.10'),
              marginBottom: theme('margin.4'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.light.DEFAULT'),
            a: {
              color: theme('colors.light.DEFAULT'),
              '&:hover': {
                color: theme('colors.light.DEFAULT'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.light.DEFAULT'),
            },
            ol: {
              li: {
                '&:before': { color: theme('colors.light.DEFAULT') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.light.DEFAULT') },
              },
            },
            strong: { color: theme('colors.light.DEFAULT') },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
