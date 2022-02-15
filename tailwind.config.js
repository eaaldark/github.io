module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('./img/sanFranciscoDesktop.jpg')",
        michiPsicologo: "url('./img/michiPsicologo.jpg')",
      },
      // ...
    },
  },
  plugins: [],
};