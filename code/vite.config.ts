/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'package-name',
      fileName: 'package-name',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [dts()],
  test: {
    globals: true,
  },
});
