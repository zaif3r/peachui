/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "p-",
  content: [
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  corePlugins: {
    preflight: false,
  },
}
