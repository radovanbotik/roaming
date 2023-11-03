/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "glass-to-tl": "35px 35px 70px #9b9b9b,-35px -35px 70px #ffffff",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  darkMode: "class",
};
