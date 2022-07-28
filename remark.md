### 配置文件别名

1. vite.config.ts 配置[页面可以正常解析，不会报错]

```js
resolve: {
  // alias: aliases,
  alias: {
    "@": path.resolve(__dirname, "src"),
    // "component": path.resolve(__dirname, "src/component")
  }
}
```

2. tsconfig.json[这个文件配置路径只是帮助 ts 环境识别这个路径,防止代码标红而已，与页面正常解析无关]

```js
 "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "component/*": ["src/component/*"]
    }
  }
```

### .lintstagedrc.json

检测代码 -> 格式化 -> 将格式化的代码文件提交暂存区`增加git add命令`

```js
"*.{js,jsx,ts,tsx}": ["prettier --write .", "eslint --fix --ext", "git add"],
```

### else

> less-loader 没有安装，看文章说在 vite 中只安装 less 就可以使用了

[vite 项目配置参考](https://github1s.com/tobe-fe-dalao/fast-vue3/blob/main/.husky/pre-commit)
