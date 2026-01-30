/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A52B45",
        background: "#F4EFEA",
        dark: "#0C1F3F",
        accent: "#19C6B2",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
        strong: "0 15px 40px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
