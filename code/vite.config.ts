/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)
import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

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
  plugins: [dts({ insertTypesEntry: true })],
  test: {
    globals: true,
  },
});
