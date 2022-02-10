module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#c9b8a7",
        secondry: "#93847b",
        lightColor: "#e7dfd6",
        thirdColor: "#cfc6bb",
        darkColor: "#0a0909",
        fourthColor: "#706860",
      },
      grayscale: {
        10: "10%",
      },
      backgroundImage: {
        "armitaj-map": "url('/src/assets/images/armitaj-map.png')",
      },
      blur: {
        xs: "2px",
      },
    },
    fontFamily: {
      display: ["Times New Roman"],
    },
  },
  plugins: [],
};