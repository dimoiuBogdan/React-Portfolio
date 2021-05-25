// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "80vh": "80vh",
        "50vh": "50vh",
      },
      minHeight: {
        "50vh": "50vh",
      },
      padding: {
        "3vw": "3vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
