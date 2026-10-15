import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Output to build/ so `npm run deploy` (gh-pages) and firebase.json keep working.
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build' },
});
