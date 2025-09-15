/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{html,js}'],  
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#010409',
        },
        primary: {
          DEFAULT: '#ffffff',
          dark: '#0d1117',
        },
        secondary: {
          DEFAULT: '#f6f8fa',
          dark: '#151b23',
        }, 
        border: {
          DEFAULT: '#d1d9e0',
          dark: '#3d444d',
        },
        button: {
          DEFAULT: '#f6f8fa',
          dark: '#212830',
        },
        text: {
          primary: {
            DEFAULT: '#000000',
            dark: '#ffffff',
          },
          secondary: {
            DEFAULT: '#59636e',
            dark: '#9198a1',
          },
        },
        header: {
          DEFAULT: '#f6f8fa',
        },
      },
    },
  },
  plugins: [],
}
