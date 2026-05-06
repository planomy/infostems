import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Stable URL; if this port is busy Vite will try the next one — check the terminal for `Local:`.
    port: 3333,
    strictPort: false,
    // Use IPv4 explicitly — avoids some Safari setups resolving `localhost` oddly.
    host: '127.0.0.1',
  },
})
