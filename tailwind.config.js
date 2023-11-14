/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  /*or ["./build/**/*.{html,js}"], */
  
  theme: {
    extend: {
      colors:{
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: { 
        'widescreen': {'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen': {'raw':'(max-aspect-ratio:13/20)'},
      }, /*add two media queries*/
      keyframes:{
        'open-menu':{
          '0%': {transform:'scaleY(0)' },
          '80%': {transform:'scaleY(1.2)' }, /*give the menu a little bounce*/
          '100%': {transform:'scaleY(1)' },
        },
      }, /*add key frmaes in an animation*/
      animation: {
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      },/*specify the animation and name it*/
      
    },
  },
  plugins: [],
}

