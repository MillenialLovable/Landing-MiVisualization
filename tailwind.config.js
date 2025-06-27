/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      animation: {
        "gradient-x-slow": "gradient-x 5s ease-in-out infinite",
        shine: "shine 2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shine: {
          "0%": { "background-position": "-200%" },
          "50%": { "background-position": "200%" },
          "100%": { "background-position": "-200%" },
        },
      },
    },
  },
  plugins: [],
};
