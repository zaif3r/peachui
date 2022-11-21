/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'p-',
  content: [
    "./src/**/*.{html,ts,js,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
