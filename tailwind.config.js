module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#FEDF2F',
        black: '#211F20',
        gray: '#9C9C9C',
      },
      letterSpacing: {
        widest: '.15em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
