import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c",
        lightBackground: "#f7fafc",
      },
    },
  },
  plugins: [],
} satisfies Config;
