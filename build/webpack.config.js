const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'my-app.js',
    library: 'my-app',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
        enforce: 'pre' //to check source files, not modified by other loaders (like babel-loader)
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      { test: /\.(jpg|png|gif|svg|tiff)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'}
    ]
  }
};