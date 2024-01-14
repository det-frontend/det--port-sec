/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      colors: {
        primary: "#020E34",
        secondary: "#113768",
        darkGreen: "#00FEB5",
        darkBg: "#142938",
        // secondary: "#113768",
        button: "#0598CE",
        text: "#00FEB5",
        bg: "#151E2F",
      },
      // colors: {
      //   primary: "#020E34",
      //   secondary: "#DCF0F2",
      //   button: "#2d598e",
      //   text: "#1B3352",
      // },
    },
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Oswald',],
      // 'body': ['"Open Sans"',],
      archivo: ["archivo"],
    },
  },
  plugins: [],
};
