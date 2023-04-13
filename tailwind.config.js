/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#b99de8",
          "secondary": "#e3b5f4",
          "accent": "#564abf",
          "neutral": "#21282C",
          "base-100": "#ffffff",
          "info": "#A9C6EA",
          "success": "#20CBAE",
          "warning": "#F9B05D",
          "error": "#FC596C"
          ,
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

