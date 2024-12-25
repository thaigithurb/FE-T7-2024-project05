import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1280px',
      },
      colors: {
        color1: "#292929",
        color2: "#00ADEF",
        color3: "#212121"
      }
    },
  },
  plugins: [],
} satisfies Config;
