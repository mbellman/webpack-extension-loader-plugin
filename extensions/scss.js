const { createLoader } = require('./extension-utilities');

module.exports = createLoader({
  dependencies: [
    'css-loader',
    'sass-loader',
    'node-sass',
    'mini-css-extract-plugin'
  ],
  extend: options => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    options.module.rules.push({
      test: /.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    });

    options.plugins.push(new MiniCssExtractPlugin());
  }
});