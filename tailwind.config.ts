import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"
import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: "#F0AB00",
        black: "#001529",
        gray: "#9B9B9B",
        white: "#FFFFFF",
      },
      dropShadow: {
        react: "0 0 2em #61dafbaa",
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "carbon"]),
    }),
  ],
} satisfies Config
