const { createLoader } = require('./extension-utilities');

module.exports = createLoader({
  dependencies: [
    'css-loader',
    'less-loader',
    'less',
    'mini-css-extract-plugin'
  ],
  extend: options => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    options.module.rules.push({
      test: /.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    });

    options.plugins.push(new MiniCssExtractPlugin());
  }
});