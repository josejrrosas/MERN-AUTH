import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    //our api on different domain, on localhost3000 frontend will be on 3001
    proxy: {
      '/api': {
        //bc this is where our backend server is 
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
})
