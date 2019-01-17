module.exports = {
  presets: [
    '@vue/app'
  ],
  // 对于使用 babel7 的用户，可以在 babel.config.js 中配置
  //按需引入 vant
    plugins: [
      ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true
      }, 'vant']
  ]
};

