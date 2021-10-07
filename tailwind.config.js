module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'tree-background': "url('/assets/img/layout/background.jpg')",
        'illustrate-samucadev': "url('/assets/img/picture/avatar.png')",
        'enterprise-alcon':
          "url('/assets/img/enterprises/alcon-engenharia-logo.png')",
      }),
      spacing: {
        header: '576px',
      },
      fontFamily: {
        merriweather: ['Merriweather'],
      },
      colors: {
        'custom-blue': '#112E6B',
      },
      flex: {
        slider: '0 0 100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
