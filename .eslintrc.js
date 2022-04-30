// [Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范](https://juejin.cn/post/7038143752036155428)
// [团队协作规范 - Eslint+Prettier+Husky配置](https://zhuanlan.zhihu.com/p/359972210)
module.exports = {
	root: true, // 告诉eslint只匹配当前目录文件,不能往父级查找
	"env": { // 设置支持运行的环境
		"browser": true,
		"es2021": true,
		"commonjs": true // 支持commonjs规范
	},
	"extends": [ // 按照什么样的标准去对比
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": // 指定解析器
		"@typescript-eslint/parser",  // typescript解析器
	"parserOptions": { // 配置解析器属性
		"ecmaFeatures": {
				"jsx": true //启用jsx
		},
		"ecmaVersion": "latest", // 指定想要使用的ECMAScript版本
		"sourceType": "module"
	},
	"plugins": [ // 加载以下规则，等待被配置后使用
		"react",
		"@typescript-eslint"
	],
	// 参考[常见的.eslintrc.js配置及rules说明](https://zhuanlan.zhihu.com/p/374205613)
	"rules": { // "off" -> 0 关闭规则、 "warn" -> 1 开启警告规则、 "error" -> 2 开启错误规则
		"no-console": "off"
	}
}
