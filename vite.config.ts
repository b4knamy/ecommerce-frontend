import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces (for Docker)
    port: 5173,       // Ensure this matches the port in your Docker Compose
    // watch: {
    //   usePolling: true,  // Useful if you're using Docker on certain OS, like macOS or Windows
    // },
  },
})
