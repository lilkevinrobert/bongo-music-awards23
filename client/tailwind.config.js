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
        montserratThin: "Montserrat-Thin",
        montserratSemibold: "Montserrat-Semibold",
        montserratBold: "Montserrat-Bold",
        montserratRegular: "Montserrat-Regular",
        montserratMedium: "Montserrat-Medium",
        montserratLight: "Montserrat-Light",
        montserratBlack: "Montserrat-Black",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

