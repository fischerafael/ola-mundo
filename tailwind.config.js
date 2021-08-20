module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { "black-900": "#111", "black-800": "#222", "black-700": "#333" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
