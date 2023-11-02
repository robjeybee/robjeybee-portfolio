import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  }
})
