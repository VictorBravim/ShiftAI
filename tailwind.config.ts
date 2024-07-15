import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#1A1A1A",
        "blue": "#0047FF",
      }
    },
  },
  plugins: [],
} satisfies Config;
