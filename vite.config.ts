import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PrismUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `prism-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
})
