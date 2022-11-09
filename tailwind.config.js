/** @type {import('tailwindcss').Config} */
module.exports = {
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  content: ['./src/**/*.{js,vue,ts}',],
  css: ['/src/assets/css/tailwind.css'],
  theme: {
    extend: {},
  },
  plugins: [],
}
