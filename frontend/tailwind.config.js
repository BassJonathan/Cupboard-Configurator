module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,js}"],
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  purge: ["./index.html", "./scr/**/*.{vue, js, ts, jsx, tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#012840",
          gradient1: "#003352",
          gradient2: "#003a5c",
          gradient3: "#005080",
          gradient4: "#0066a3",
          gradient5: "#007dc7",
          gradient6: "#00a0ff",
        },
        blue: "#115D8C",
        red: {
          DEFAULT: "#400808",
          gradient1: "#690a0a",
          gradient2: "#8f0b0b",
          gradient3: "#b30c0c",
          gradient4: "#e00b0b",
          gradient5: "#fc0303",
        },
        green: {
          DEFAULT: "#8C8A0A",
          dark: "#403F08",
          gradient1: "#b3b00b",
          gradient2: "#c7c40a",
          gradient3: "#e3e009",
          gradient4: "#f5f102",
        },
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  variants: {
    extend: {},
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
