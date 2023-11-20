import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url))
    }
  }
});
