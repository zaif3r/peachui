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
      pattern: /(primary|secondary|accent|neutral|ghost|outline|100|200|300|info|success|warning|error|focus|content|transparent)$/,
      variants: ["hover"],
    },
    {
      pattern: /(xxs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl)$/,
      variants: ["responsive"],
    },
    {
      pattern: /(top|bottom|left|right|start|end|center|middle|vertical|horizontal)$/,
      variants: ["responsive"],
    }
  ]
}
