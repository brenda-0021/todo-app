/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: "'Anton', serif",
        inter: "'Inter', serif",
      },
      colors: {
        cherry: "#d24c49",
        "soft-taupe": "#eec8a3",
        "red-velvet": "#931a23",
        "creamy-caramel": "#dd9c7c",
      },
    },
  },
  plugins: [],
};
