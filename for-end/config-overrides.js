const path = require('path');
// const rewireLess = require('react-app-rewire-less')
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function(config, env) {

  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  //配置路径@
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }

  // 支持 less
  // config = rewireLess(config, env);

  return config;
}
