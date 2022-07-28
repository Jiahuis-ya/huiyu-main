export function createViteCSS() {
  const viteCSS = {
    // 配置 css modules 的行为
      // modules: {  },
      // // postCss 配置
      // postcss: {
      // },
      //指定传递给 css 预处理器的选项
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          additionalData: `
            @import "./src/assets/css/reset.css";
            @import "./src/assets/sass/mixin.scss";
            
          `,
          // javascriptEnabled: true // 使用内联javascript
        },
        // 全局引入了 less 的文件
        less: {
          additionalData: `
            @import "./src/assets/less/mixin.less";
          `,
          // javascriptEnabled: true // 使用内联javascript
        }
      }
  }


  return viteCSS;
}