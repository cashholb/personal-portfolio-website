import Checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/src/assets': '/source-assets',
    },
  },
  plugins: [
    react(),
    Checker({ scss: true, json: true }),
  ],
  
});