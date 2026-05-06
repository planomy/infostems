import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Project Pages URL is /<repo>/ ; asset paths must match or JS/CSS 404.
// `vite dev` keeps base `/` so local URLs stay simple.
// https://vite.dev/config/shared-options.html#base
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/infostems/' : '/',
  server: {
    // Stable URL; if this port is busy Vite will try the next one — check the terminal for `Local:`.
    port: 3333,
    strictPort: false,
    // Use IPv4 explicitly — avoids some Safari setups resolving `localhost` oddly.
    host: '127.0.0.1',
  },
}))
