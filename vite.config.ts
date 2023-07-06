import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // uncomment this to enable electron support
    // "main": "dist-electron/main.js",
    //  && electron-builder

    // electron([
    // 	{
    // 		// Main-Process entry file of the Electron App.
    // 		entry: "electron/main.ts",
    // 	},
    // 	{
    // 		entry: "electron/preload.ts",
    // 		onstart(options) {
    // 			// Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
    // 			// instead of restarting the entire Electron App.
    // 			options.reload()
    // 		},
    // 	},
    // ]),
    // renderer(),
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
})
