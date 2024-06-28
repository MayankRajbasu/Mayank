/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '240px',
        sm: '496px',
        msd: '572px',
        sd: '700px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontSize:{
        sd: "0.925rem",
      },
    },
  },
  plugins: [],
}