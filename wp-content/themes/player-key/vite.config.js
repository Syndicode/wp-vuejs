// View your website at your own local server
// for example http://player-key.test

// http://localhost:3000 is serving Vite on development
// but accessing it directly will be empty

import { defineConfig, loadEnv, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import { basename, join } from "path";

const themeDirName = basename(__dirname);

// https://vitejs.dev/config

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      vue()
    ],

    root: '',
    base: process.env.NODE_ENV === 'development' ? '/' : `/wp-content/themes/${themeDirName}/dist/`,

    build: {
      outDir: normalizePath(join(__dirname, './dist')),
      emptyOutDir: true,
      manifest: true,
      target: 'esnext',
      rollupOptions: {
        input: {
          main: normalizePath(join(__dirname, process.env.VITE_ENTRY_POINT ? `.${process.env.VITE_ENTRY_POINT}` : './src/main.js')),
        },
        output: {
          assetFileNames: '[name].[hash][extname]',
          entryFileNames: '[name].[hash].js',
          chunkFileNames: '_chunk.[hash].js',
          dir: normalizePath(join(__dirname, './dist')),
        },
      },
    },

    server: {
      cors: true,
      strictPort: true,
      port: 3000,
      host: '0.0.0.0',
    },
  })
}
