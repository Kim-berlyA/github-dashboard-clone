/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],  
  theme: {
    extend: {
      colors: {
        github: {
          background: '#010409',
          primary: '#0d1117',
          secondary: '#151b23',
          tertiary: '#3d444d',
        }
      }
    },
  },
  plugins: [],
}
