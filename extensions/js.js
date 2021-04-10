const { createLoader } = require('./extension-utilities');

module.exports = createLoader({
  dependencies: [
    '@babel/core',
    '@babel/preset-env',
    'babel-loader'
  ],
  extend: options => {
    options.module.rules.push({
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env']
      }
    });
  }
});