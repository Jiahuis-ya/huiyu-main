import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
// import EnvironmentPlugin from 'vite-plugin-environment' // 这个还没有安装
import { resolve } from 'path'

// 在这个文件的打印测试信息可以在终端显示

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('process', env)

  if (command === 'serve') {
    // 开发环境

    return {
      plugins: [react(), eslintPlugin()],
      server: {
        port: 4000,
        open: true
      },
      // 配置文件夹别名
      resolve: {
        // alias: aliases,
        alias: {
          '@': resolve(__dirname, 'src'),
          component: resolve(__dirname, 'src/component')
        }
      },
      css: {
        // 🔥此处添加全局scss🔥
        preprocessorOptions: {
          scss: {
            additionalData: `
              @import "./src/assets/css/reset.css";
              @import "./src/assets/sass/mixin.scss";
              
            `
          }
        }
      }
    }
  } else {
    // 线上环境

    return {
      plugins: [react()],
      server: {
        port: 4000,
        open: true
      }
    }
  }
})
