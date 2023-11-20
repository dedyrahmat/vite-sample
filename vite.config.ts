import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['>0.3%, not dead', 'not IE 11'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    })
  ],
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
