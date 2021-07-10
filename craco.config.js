// Adding tailwindcss and autoprefixer as POSTCSS plugin

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
