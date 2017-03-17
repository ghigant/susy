const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  watch: true,
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/dist/',
    host: '0.0.0.0',
    contentBase: "./"
  }
};
