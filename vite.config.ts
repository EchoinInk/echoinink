import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteImagemin({
      plugins: {
        png: imageminPngquant(),
      },
      onlyAssets: true,
      },
      makeWebp: {
        plugins: {
          png: imageminWebp(),
        },
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
