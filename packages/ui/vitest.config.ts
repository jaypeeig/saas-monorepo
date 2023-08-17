import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'; 

export default defineConfig({
  // @ts-ignore
  plugins: [vue()],
  test: {
    reporters: ['verbose'],
    include: ['**/*.test.ts'],
    globals: true,
    environment: 'jsdom'
  },
});