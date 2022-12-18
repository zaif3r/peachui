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
      pattern: /bg-+/,
      variants: ["responsive", "hover"],
    },
    {
      pattern: /btn-+/,
      variants: ["responsive", "hover"],
    },
    {
      pattern: /badge-+/,
      variants: ["responsive", "hover"],
    },
    {
      pattern: /step-+/,
      variants: ["responsive", "hover"],
    },
  ]
}
