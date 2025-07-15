
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import devtoolsJson from 'vite-plugin-devtools-json';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/"),
      "@Components": path.resolve(__dirname, "./app/shared/components/index.ts"),
      "@Hooks": path.resolve(__dirname, "./app/shared/hooks/index.ts"),
      "@Types": path.resolve(__dirname, "./app/shared/types/index.ts"),
      "@Svg": path.resolve(__dirname, "./app/shared/svg/index.ts"),
    },
  },
  plugins: [
    
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tailwindcss(),
    devtoolsJson(),
    netlifyPlugin(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    globals: true,
  },
});
