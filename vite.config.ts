import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';


export default defineConfig({
  plugins: [
    react(),
    compression(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/global.scss';`,
      },
    },
  },
}); 