const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'vendor': [
      'angular',
      'moment',
      'moment-timezone'
    ],
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
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }, {
      test: /\.json$/,
      use: 'json-loader'
    }, {
      test: require.resolve('moment'),
      use: [{
        loader: 'expose-loader',
        options: 'moment'
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/dist/',
    host: '0.0.0.0',
    contentBase: "./"
  }
};
