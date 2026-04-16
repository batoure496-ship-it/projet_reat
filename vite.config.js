import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://relaxed-pudding-d7217b.netlify.app/assets/index-B9tN9Nzc.js'   // ← AJOUTEZ CETTE LIGNE
})