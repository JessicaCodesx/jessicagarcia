import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jessicagarcia/', // Replace with your actual repo name
  build: {
    outDir: 'dist',
  },
})