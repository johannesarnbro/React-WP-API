'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './sourcecode/index.js',

  output: {
    path: path.join(__dirname),
    filename: 'js.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: ['babel'],
      query: {
        optional: ['runtime'],
        externalHelpers: true,
        stage: 0
      }
    }]
  }
};
