import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
// import EnvironmentPlugin from 'vite-plugin-environment' // 这个还没有安装



// 在这个文件的打印测试信息可以在终端显示

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('process', env)

  if(command === 'serve') {
    // 开发环境

    return {
      plugins: [react()],
      server: {
        port: 4000,
        open: true
      }
    }
  } else{
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
