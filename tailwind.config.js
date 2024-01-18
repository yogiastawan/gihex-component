/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.ejs', './src/components/*.ejs'],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      fine: { 'raw': '(pointer:fine)' }, //for mouse pointer
      coarse: { 'raw': '(pointer:coarse)' } //for mouse pointer
    },
    extend: {},
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

