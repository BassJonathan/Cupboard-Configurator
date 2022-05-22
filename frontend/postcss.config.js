
/*
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// https://stackoverflow.com/questions/65893403/building-tailwindcss-with-vue3-install-for-production

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
*/


module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
}