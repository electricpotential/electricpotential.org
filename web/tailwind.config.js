/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        title: ["Lucette"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "electric-yellow": "#E5FF7E",
        "electric-cyan": "#7AEFF7",
        "electric-sky": "#77BDF0",
        "light-sky": "#9FC3F0",
        "dark-sky": "#3F94D2",
        joy: "#FFFBDD",
        hope: "#E9F9F8",
        peace: "#EBF8FE",
        pride: "#DADDFF",
        inspiration: "#FFEEEE",
        action: "EEF5EA",
        dark: "#202223",
        shadow: "#50535F",
        shade: "#C3C7CE",
        light: "#EFF0F2",
        bright: "#F9F9F9",
      },
    },
  },
  plugins: [],
}
