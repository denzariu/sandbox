/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_primary: '#F9F7F7',
        light_secondary: '#DBE2EF',
        light_tertiary: '#3F72AF',
        light_quaternary: '#112D4E',

        dark_primary: '#222831',
        dark_secondary: '#31363F',
        dark_tertiary: '#76ABAE',
        dark_quaternary: '#EEEEEE'
      }
    },
  },
  plugins: [],
}

