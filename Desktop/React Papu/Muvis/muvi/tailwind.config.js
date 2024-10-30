/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorBaseVede: '#003300',
        colorBaseVedeBanner: '#006600',
        colorBaseVedeBorde: '#32CD32',
        coloramarilloLetra: '#FFFF00',
        colorverdeLetra: '#90EE90',
      },
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}