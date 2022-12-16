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
      pattern: /btn-+/,
      variants: ["responsive", "hover"],
    },
    {
      pattern: /badge-+/,
      variants: ["responsive", "hover"],
    },
  ]
}
