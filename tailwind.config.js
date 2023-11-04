/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#fafafa",
        black: "#000",
        text: "#030229",
        primary: "#605bff",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
