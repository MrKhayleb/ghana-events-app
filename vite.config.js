// Vite's config file. Vite reads this on startup (npm run dev) and on build
// (npm run build) to decide how to bundle the project.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The React plugin teaches Vite how to handle JSX and enables Fast Refresh
  // (your component updates in the browser instantly on save, without a
  // full page reload or losing state).
  plugins: [react()],
})
