/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "30px",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('./src/assets/img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
