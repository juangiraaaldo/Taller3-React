import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si estamos en GitHub Pages (entorno de producción de GH), usa el nombre del repo.
  // Si no (como en Vercel o Local), usa la raíz '/'.
  base: process.env.NODE_ENV === 'production' && !process.env.VERCEL
  ? '/Taller3-React/'
  : '/',
})
