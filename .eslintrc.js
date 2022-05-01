// [Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范](https://juejin.cn/post/7038143752036155428)
// [团队协作规范 - Eslint+Prettier+Husky配置](https://zhuanlan.zhihu.com/p/359972210)
module.exports = {
  root: true, // 告诉eslint只匹配当前目录文件,不能往父级查找
  env: {
    // 指定代码的运行环境（设置支持运行的环境）
    browser: true,
    es2021: true,
    commonjs: true, // 支持commonjs规范
    es6: true // [启用 es6功能]支持新的 ES6 全局变量或类型（比如 Set 等新类型）
  },
  extends: [
    // 定义文件继承的子规范（按照什么样的标准去对比）
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // 检测ts的eslint插件
    // 'prettier/@typescript-eslint', // 使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
    // 'plugin:prettier/recommended' // Make sure this is always the last element in the array.
    'prettier'
  ],
  // 定义Eslint的解析器
  parser: '@typescript-eslint/parser', // typescript解析器
  parserOptions: {
    // 配置解析器属性
    ecmaFeatures: {
      jsx: true //启用jsx
    },
    // 指定想要使用的ECMAScript版本
    ecmaVersion: '6', //支持 ES6 语法(这不代表支持新类型（比如 Set 等新类型），需要在env单独设置)
    sourceType: 'module'
  },
  plugins: [
    // 定义eslint所依赖的插件（加载以下规则，等待被配置后使用）
    'react',
    '@typescript-eslint'
  ],
  // 参考[常见的.eslintrc.js配置及rules说明](https://zhuanlan.zhihu.com/p/374205613)
  rules: {
    // "off" -> 0 关闭规则、 "warn" -> 1 开启警告规则、 "error" -> 2 开启错误规则
    'no-console': 'off'
  }
}
