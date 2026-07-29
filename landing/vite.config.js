import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../frontend'),
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
  base: './',
});
