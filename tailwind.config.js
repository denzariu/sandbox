/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_primary: 'rgba(249, 247, 247, <alpha-value>)',
        light_secondary: 'rgba(219, 226, 239, <alpha-value>)',
        light_tertiary: 'rgba(63, 114, 175, <alpha-value>)',
        light_quaternary: 'rgba(17, 45, 78, <alpha-value>)',

        dark_primary: 'rgba(34, 40, 49, <alpha-value>)',
        dark_secondary: 'rgba(49, 54, 63, <alpha-value>)',
        dark_tertiary: 'rgba(118, 171, 174, <alpha-value>)',
        dark_quaternary: 'rgba(238, 238, 238, <alpha-value>)'
      }
    },
  },
  plugins: [],
}


// light_primary: '#F9F7F7',
// light_secondary: '#DBE2EF',
// light_tertiary: '#3F72AF',
// light_quaternary: '#112D4E',

// dark_primary: '#222831',
// dark_secondary: '#31363F',
// dark_tertiary: '#76ABAE',
// dark_quaternary: '#EEEEEE'

// light_primary: 'rgba(249, 247, 247, <alpha-value>)',
// light_secondary: 'rgba(219, 226, 239, <alpha-value>)',
// light_tertiary: 'rgba(63, 114, 175, <alpha-value>)',
// light_quaternary: 'rgba(17, 45, 78, <alpha-value>)',

// dark_primary: 'rgba(34, 40, 49, <alpha-value>)',
// dark_secondary: 'rgba(49, 54, 63, <alpha-value>)',
// dark_tertiary: 'rgba(118, 171, 174, <alpha-value>)',
// dark_quaternary: 'rgba(238, 238, 238, <alpha-value>)'