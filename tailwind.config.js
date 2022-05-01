module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        blue: "rgb(85, 53, 222)",
        purple: "rgba(130, 59, 231)",
      },
    },
  },
  plugins: [require("daisyui")],
};
