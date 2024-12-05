/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        LatoBold: "LatoBold",
        LatoLight: "LatoLight",
        LatoRegular: "LatoRegular",
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

