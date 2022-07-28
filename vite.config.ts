// 在这个文件的打印测试信息可以在终端显示

import {
  defineConfig,
  loadEnv,
  ConfigEnv,
  UserConfig
} from 'vite'
// import EnvironmentPlugin from 'vite-plugin-environment' // 这个还没有安装
import { resolve } from 'path'
import { createVitePlugins } from './config/vite/plugins/index'
import { createViteCSS } from './config/vite/css/index'
import { createViteBuild } from './config/vite/build/index'

// https://vitejs.cn/config/#server-open
// https://vitejs.dev/config/
export default defineConfig(({command, mode}: ConfigEnv): UserConfig  => {
  const env: Record<string, string> = loadEnv(mode, process.cwd())
  const isBuild = command === 'build'

  console.log('process', env)

  return {
      base: isBuild ? env.VITE_PROD_BASE : env.VITE_DEV_BASE,
      server: {
        host: true, // 可以使用ip访问项目
        port: 4000,
        open: true,
      },
      // 插件设置
      plugins: createVitePlugins(isBuild),
      build: createViteBuild(),
      css: createViteCSS(),
      // 文件夹别名设置
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
          'component': resolve(__dirname, 'src/component')
        }
      }
    }

})
