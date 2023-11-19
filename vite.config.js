import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
  build: {
    rollupOptions: {
        external: [
            "react", // ignore react stuff
            "react-dom",
            "react-icons/gr",
            "react-icons/di"
        ],
    }
},
});
