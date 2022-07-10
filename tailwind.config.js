/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        JosefinSans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        brightBlue: 'hsl(220, 98%, 61%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        lightGrayishBlue: 'hsl(233, 11%, 84%)',
        darkGrayishBlue: 'hsl(236, 9%, 61%)',
        veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        veryDarkBlueDt: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlueDt: 'hsl(235, 24%, 19%)',
        lightGrayishBlueDt: 'hsl(234, 39%, 85%)',
        lightGrayishBlueHoverDt: 'hsl(236, 33%, 92%)',
        darkGrayishBlueDt: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlueDt: 'hsl(233, 14%, 35%)',
        veryDarkGrayishBlueDt1: 'hsl(237, 14%, 26%)'
      },
      backgroundImage: {
        'hero': "url('../images/bg-desktop-light.jpg')",
        'heroDark': "url('../images/bg-desktop-dark.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    })
  ],
}
