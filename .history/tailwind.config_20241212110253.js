/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
    },
    colors: {
      'primary': '#3495d0',
      'red': '#FF0000',
    },
    fontFamily:{
      'primaryfont': "Montserrat",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}