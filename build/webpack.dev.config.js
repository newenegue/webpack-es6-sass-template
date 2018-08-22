const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: base.output.path,
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});