import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Define a port, CRA default is 3000
    open: true, // Optional: Open browser automatically
  },
  build: {
    outDir: 'dist', // Default output directory
  },
});
