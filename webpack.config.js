var path = require('path');
var webpack = require('webpack');


const hostname = 'localhost';
const port = 3000;

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${hostname}:${port}`,
    'webpack/hot/only-dev-server',
    './sourcecode/index.js',
  ],
  devtool: "eval",
  output: {
    path: __dirname,
    filename: "js.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include: path.join(__dirname, './sourcecode'),
      loaders: ['react-hot', 'babel'],
    }],
  },
};
