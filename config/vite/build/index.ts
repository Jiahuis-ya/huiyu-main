export function createViteBuild() {
  const viteBuild = {
    // brotliSize: false,
    // // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 指定代码混淆器 || 禁用最小化混淆
    minify: "terser" as 'terser', // boolean | 'terser' | 'esbuild'
    // // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // target: "modules", //浏览器兼容性  "esnext"|"modules"
    outDir: "dist", //指定输出路径
    assetsDir: "static/assets", //生成静态资源的存放路径
    // // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    // cssCodeSplit: true,//启用/禁用 CSS 代码拆分
    // sourcemap: false,//构建后是否生成 source map 文件
   
    // //当设置为 true，构建后将会生成 manifest.json 文件
    // manifest: false,
    emptyOutDir: true, //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    // chunkSizeWarningLimit: 500 //chunk 大小警告的限制
  }


  return viteBuild;
}