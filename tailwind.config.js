/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        DEFAULT: '20px', // Adjust the default blur value if needed
      },
    },
  },
  variants: {
    backdropBlur: ['responsive', 'hover', 'focus'],
  },
  plugins: [
  ],
}