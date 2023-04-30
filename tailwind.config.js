module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '552px',
      sm: '728px',
      md: '904px',
      lg: '1080px',
      xl: '1240px',
      // xl: '1504px',
    },
    extend: {
      colors: {
        fogra: '#080808',
        jet: '#292929',
        eerie: '#191919',
        india: '#1A8917',
        pakistan: '#156912',
        amber: '#FFC017',
        sonic: '#757575',
        platinum: '#E6E6E6',
        cultured: '#F2F2F2',
        'blue-cg': '#0277A2',
        'blue-ncs': '#0293C9',
        'light-gray': '#D6D6D6',
      },
      fontFamily: {
        // body: ['"Montserrat", sans-serif'],
        // body: ['"Roboto Slab", sans-serif'],
        body: ['"Quicksand", sans-serif'],
        // body: ['"League Spartan", sans-serif'],
        hahmlet: ['"Hahmlet", serif'],
        garamond: ['"EB Garamond", serif'],
        newsreader: ['"Newsreader", serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
