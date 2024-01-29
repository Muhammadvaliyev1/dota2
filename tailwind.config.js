/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Rowdies': ["Rowdies"],
        'Archivo': ["Archivo"],
      },
      screens: {
        'base': '890px'
      },
      margin: {
        '100': '100px'
      },
      padding: {
        '100': '100px',
        '60': '60px',
      },
      colors: {
        brend: {
          'darkpurple': '#181C27',
          'wentblack': '#171B26',
          'gray': '#A0A4AD',
          'space-gray': '#EBEBEB',
          'black': '#1D212E',
          'dark': '#1E2231',
          'cyan': '#4FAEC0'
        }
      },
      backgroundImage: {
        'heroMobile': 'radial-gradient(245.26% 109.82% at 66.15% 87.66%, rgba(164, 92, 252, 0.39) 0%, rgba(183, 158, 255, 0.14) 22.4%, rgba(23, 27, 38, 0.00) 99.48%)' ,
        'heroDesktop': 'radial-gradient(129.33% 84.63% at 71.77% 56.44%, rgba(164, 92, 252, 0.39) 0%, rgba(183, 158, 255, 0.14) 22.4%, rgba(23, 27, 38, 0.00) 99.48%)'
      }
    },
  },
  plugins: [],
}

