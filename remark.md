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
