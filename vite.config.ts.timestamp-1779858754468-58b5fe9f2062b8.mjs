// vite.config.ts
import { defineConfig } from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/vite@5.4.21_@types+node@22.19.19/node_modules/vite/dist/node/index.js";
import react from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/@vitejs+plugin-react-swc@3.11.0_vite@5.4.21_@types+node@22.19.19_/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/lovable-tagger@1.3.0_vite@5.4.21_@types+node@22.19.19_/node_modules/lovable-tagger/dist/index.js";
import viteImagemin from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/@vheemstra+vite-plugin-imagemin@2.2.1_vite@5.4.21_@types+node@22.19.19_/node_modules/@vheemstra/vite-plugin-imagemin/dist/index.js";
import imageminPngquant from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/imagemin-pngquant@10.0.0/node_modules/imagemin-pngquant/index.js";
import imageminWebp from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/imagemin-webp@8.0.0/node_modules/imagemin-webp/index.js";
import imageminAvif from "file:///Users/meltmyheart/Documents/GitHub/echoinink/node_modules/.pnpm/@vheemstra+imagemin-avifenc@2.1.0/node_modules/@vheemstra/imagemin-avifenc/index.js";
var __vite_injected_original_dirname = "/Users/meltmyheart/Documents/GitHub/echoinink";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteImagemin({
      plugins: {
        png: imageminPngquant()
      },
      onlyAssets: true,
      makeAvif: {
        plugins: {
          png: imageminAvif()
        }
      },
      makeWebp: {
        plugins: {
          png: imageminWebp()
        }
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWVsdG15aGVhcnQvRG9jdW1lbnRzL0dpdEh1Yi9lY2hvaW5pbmtcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tZWx0bXloZWFydC9Eb2N1bWVudHMvR2l0SHViL2VjaG9pbmluay92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWVsdG15aGVhcnQvRG9jdW1lbnRzL0dpdEh1Yi9lY2hvaW5pbmsvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcIkB2aGVlbXN0cmEvdml0ZS1wbHVnaW4taW1hZ2VtaW5cIjtcbmltcG9ydCBpbWFnZW1pblBuZ3F1YW50IGZyb20gXCJpbWFnZW1pbi1wbmdxdWFudFwiO1xuaW1wb3J0IGltYWdlbWluV2VicCBmcm9tIFwiaW1hZ2VtaW4td2VicFwiO1xuaW1wb3J0IGltYWdlbWluQXZpZiBmcm9tIFwiQHZoZWVtc3RyYS9pbWFnZW1pbi1hdmlmZW5jXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKSxcbiAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICBwbmc6IGltYWdlbWluUG5ncXVhbnQoKSxcbiAgICAgIH0sXG4gICAgICBvbmx5QXNzZXRzOiB0cnVlLFxuICAgICAgbWFrZUF2aWY6IHtcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIHBuZzogaW1hZ2VtaW5BdmlmKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbWFrZVdlYnA6IHtcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIHBuZzogaW1hZ2VtaW5XZWJwKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLG9CQUFvQjtBQUN0VixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sc0JBQXNCO0FBQzdCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sa0JBQWtCO0FBUHpCLElBQU0sbUNBQW1DO0FBVXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxJQUMxQyxhQUFhO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDUCxLQUFLLGlCQUFpQjtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUCxLQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQLEtBQUssYUFBYTtBQUFBLFFBQ3BCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
