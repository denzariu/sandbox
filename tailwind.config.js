/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // Using modern `rgb`
        light_primary: 'rgb(var(--color-light_primary) / <alpha-value>)',
        light_secondary: 'rgb(var(--color-light_secondary) / <alpha-value>)',
        light_tertiary: 'rgb(var(--color-light_tertiary) / <alpha-value>)',
        light_quaternary: 'rgb(var(--color-light_quaternary) / <alpha-value>)',

        dark_primary: 'rgb(var(--color-dark_primary) / <alpha-value>)',
        dark_secondary: 'rgb(var(--color-dark_secondary) / <alpha-value>)',
        dark_tertiary: 'rgb(var(--color-dark_tertiary) / <alpha-value>)',
        dark_quaternary: 'rgb(var(--color-dark_quaternary) / <alpha-value>)',

        // Using modern `hsl`
        // primary: 'hsl(var(--color-primary) / <alpha-value>)',
        // secondary: 'hsl(var(--color-secondary) / <alpha-value>)',

        // Using legacy `rgba`
        // primary: 'rgba(var(--color-primary), <alpha-value>)',
        // secondary: 'rgba(var(--color-secondary), <alpha-value>)',

        // light_primary: 'rgba(249, 247, 247, <alpha-value>)',
        // light_secondary: 'rgba(219, 226, 239, <alpha-value>)',
        // light_tertiary: 'rgba(63, 114, 175, <alpha-value>)',
        // light_quaternary: 'rgba(17, 45, 78, <alpha-value>)',

        // dark_primary: 'rgba(34, 40, 49, <alpha-value>)',
        // dark_secondary: 'rgba(49, 54, 63, <alpha-value>)',
        // dark_tertiary: 'rgba(118, 171, 174, <alpha-value>)',
        // dark_quaternary: 'rgba(238, 238, 238, <alpha-value>)'
      }
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        myLight: {
          colors: {
            'primary': {
              50: '#f4f8fd',
              100: '#e8f1fb',
              200: '#c6ddf4',
              300: '#a3c8ed',
              400: '#5e9fe0',
              500: '#1976d2',
              600: '#176abd',
              700: '#13599e',
              800: '#0f477e',
              900: '#0c3a67',
            },
            'secondary': {
              50: '#f4fbfa',
              100: '#e9f6f5',
              200: '#c9e9e6',
              300: '#a8dbd7',
              400: '#67c1b8',
              500: '#26a69a',
              600: '#22958b',
              700: '#1d7d74',
              800: '#17645c',
              900: '#13514b',
            },
          },
          'primary': '#F9F7F7',           //300,
          'primary-focus': '#DBE2EF',     //400
          'primary-content': '#0c3a67',   //900  
          'secondary': '#DBE2EF',         //300
          'secondary-focus': '#67c1b8',   //400
          'secondary-content': '#13514b', //900
          'accent': colors.fuchsia[300],
          'accent-focus': colors.fuchsia[400],
          'accent-content': colors.fuchsia[900],
          'neutral': colors.neutral[900],
          'neutral-focus': colors.neutral[700],
          'neutral-content': colors.neutral[50],
          'base-100': colors.slate[50],
          'base-200': colors.slate[100],
          'base-300': colors.slate[200],
          'base-content': colors.slate[900],
          'info': colors.sky[300],
          'info-content': colors.sky[900],
          'success': colors.emerald[400],
          'success-content': colors.emerald[900],
          'warning': colors.yellow[400],
          'warning-content': colors.yellow[900],
          'error': colors.rose[300],
          'error-content': colors.rose[900],
        },
        myDark: {
          colors: {
            'primary': {
              50: '#f4f8fd',
              100: '#e8f1fb',
              200: '#c6ddf4',
              300: '#a3c8ed',
              400: '#5e9fe0',
              500: '#1976d2',
              600: '#176abd',
              700: '#13599e',
              800: '#0f477e',
              900: '#0c3a67',
            },
            'secondary': {
              50: '#f4fbfa',
              100: '#e9f6f5',
              200: '#c9e9e6',
              300: '#a8dbd7',
              400: '#67c1b8',
              500: '#26a69a',
              600: '#22958b',
              700: '#1d7d74',
              800: '#17645c',
              900: '#13514b',
            },
          },
          'primary': '#222831',         //700,
          'primary-focus': '#1976d2',   //500
          'primary-content': '#f4f8fd', //50  
          'secondary': '#31363F',       //700
          'secondary-focus': '#26a69a', //500
          'secondary-content': '#f4fbfa', //50
          'accent': colors.fuchsia[700],
          'accent-focus': colors.fuchsia[500],
          'accent-content': colors.fuchsia[50],
          'neutral': colors.neutral[100],
          'neutral-focus': colors.neutral[200],
          'neutral-content': colors.neutral[900],
          'base-100': colors.slate[900],
          'base-200': colors.slate[800],
          'base-300': colors.slate[700],
          'base-content': colors.slate[50],
          'info': colors.sky[300],
          'info-content': colors.sky[900],
          'success': colors.emerald[400],
          'success-content': colors.emerald[900],
          'warning': colors.yellow[400],
          'warning-content': colors.yellow[900],
          'error': colors.rose[300],
          'error-content': colors.rose[900],
        }
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
}

// Colors in HEX and RGB:

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