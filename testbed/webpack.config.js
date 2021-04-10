const path = require('path');
const { ExtensionLoaderPlugin } = require('../index');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.join(__dirname, './main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  plugins: [
    new ExtensionLoaderPlugin(['js', 'vue', 'scss', 'less'])
  ]
};