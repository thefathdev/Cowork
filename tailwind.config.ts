import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "rigid-black": "#000000",
      "clear-white": "#FFFFFF",
      "flexing-blue": "#3139FB",
      "shiny-pink": "#FCBEDC",
      "tammed-yellow": "#FFFADD",
      "bold-red": "#FF3333",
    },
    extend: {
      spacing: {
        "18": "4.5rem",
      },
      fontFamily: {
        "neue-regrade": "var(--font-neue-regrade)",
        "general-sans": "var(--font-general-sans)",
      },
    },
  },
  plugins: [],
};
export default config;
