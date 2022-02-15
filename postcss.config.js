// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss"),
//     require("autoprefixer"),
//   ],
// };

module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwindcss-config.js" },
    autoprefixer: {},
    // "postcss-import": {},
  },
};
