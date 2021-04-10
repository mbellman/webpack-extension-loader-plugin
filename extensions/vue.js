const { createLoader } = require('./extension-utilities');

module.exports = createLoader({
  dependencies: [
    'vue-loader',
    'vue-template-compiler'
  ],
  extend: options => {
    options.module.rules.push({
      test: /.vue$/,
      loader: 'vue-loader'
    });
  
    const { VueLoaderPlugin } = require('vue-loader');
  
    options.plugins.push(new VueLoaderPlugin());
  }
});