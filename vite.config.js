import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'; // For Node.js environments
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
    resolve: {
    alias: {
      // Set '@' to resolve to the 'src' directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
})

