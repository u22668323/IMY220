/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', 
        secondary: '#14171A', 
        accent: '#F5F8FA', 
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
