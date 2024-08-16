/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'night': '#2C2C2C',
      'white': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #76A3FC, #466196)',
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}