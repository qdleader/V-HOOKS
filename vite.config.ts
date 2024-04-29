import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.d.ts'),
      name: 'MyVueHooks',
      fileName: (format) => `index.${format}.js`,
    },
  }
})
