const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: {
    'app': path.resolve(__dirname, '../src/index.js'),
    'app.min': path.resolve(__dirname, '../src/index.js')
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', //to check source files, not modified by other loaders (like babel-loader)
        options: {
          formatter: require('eslint-formatter-friendly')
        }
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
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      favicon: path.resolve(__dirname, '../src/assets/favicon.png')
    })
  ]
};