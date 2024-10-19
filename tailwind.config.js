/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'LightSkyBlue': '#87CEFA',
        'MediumSkyBlue': '#80DAEB',
        'VividSkyBlue': '#00CCFF',
        'DeepSkyBlue': '#00BFFF',
      }
    },
  },
  plugins: [],
}

