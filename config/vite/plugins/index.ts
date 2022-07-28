import { PluginOption } from 'vite'

import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'


export function createVitePlugins(isBuild: boolean) {
  const vitePlugins:PluginOption[] = [
    react(),
    isBuild ? '' : eslintPlugin() // 开发环境检测错误显示
  ].filter(Boolean) as PluginOption[]

  // 自动按需引入其他插件
  // vitePlugins.push(ConfigImageminPlugin());


  return vitePlugins;
}