import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-2-color-change/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
