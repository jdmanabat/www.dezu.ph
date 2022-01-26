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
          DEFAULT: '#CB2026',
        },
        secondary: {
          DEFAULT: '#fced00',
        },
        dark: {
          DEFAULT: '#171717',
          light: '#888888',
        },
        light: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              fontSize: '1.125rem',
              'h1, h2, h3, h4,': {
                fontWeight: theme('fontWeight.bold'),
                color: 'inherit',
              },
              'h3, h4,': {
                lineHeight: theme('lineHeight.9'),
              },
              'h1, h2, h3, h4, h5, h6, p': {
                marginTop: 0,
              },
              h2: {
                fontSize: '6rem',
                marginBottom: theme('margin.4'),
              },
              h3: {
                fontSize: '1.875rem',
              },
              h4: {
                fontSize: '1.5rem',
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
                  '&:before': {
                    backgroundColor: theme('colors.light.DEFAULT'),
                  },
                },
              },
              strong: { color: theme('colors.light.DEFAULT') },
            },
          },
        };
      },
      aspectRatio: {
        0: '0',
      },
    },
  },
  variants: {
    extend: {
      aspectRatio: ['responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
