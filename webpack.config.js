const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 4000,
    contentBase: './public'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
      }
    }, {
      test: /.html$/,
      loader: 'underscore-template-loader',
      query: {
        engine: 'lodash',
      }
    }, {
      test: /.css$/,
      use: ExtractTextPlugin.extract({
        use: "css-loader"
      })
    }],
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
