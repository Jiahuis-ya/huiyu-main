module.exports = {
  // 采用 cz 自定义的提交规范, > .cz-config.js
  // extends: ['cz'], // (暂时遇到eslint错误[也不会]阻止提交)
  extends: ['@commitlint/config-conventional'], // 使用官方的提交规范(遇到eslint错误[也不会]阻止提交)
  rules: {
    // 自定义规则
  }
}
