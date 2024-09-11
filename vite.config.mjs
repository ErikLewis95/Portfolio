import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSvgPlugin from "vite-plugin-react-svg";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [react(), reactRefresh(), reactSvgPlugin()],
  optimizeDeps: {
    exclude: [
      "pako/lib/zlib/zstream.js",
      "pako/lib/zlib/deflate.js",
      "pako/lib/zlib/inflate.js",
      "pako/lib/zlib/constants.js",
    ],
  },
  server: {
    open: true,
    port: 3000,
  },
  watch: {
    usePolling: true,
  },
});
