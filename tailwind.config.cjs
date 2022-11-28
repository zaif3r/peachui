/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  safelist: [
    {
      pattern: /btn-+/
    },
    {
      pattern: /badge-+/
    },
  ]
}
