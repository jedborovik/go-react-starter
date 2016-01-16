var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index',
  ],
  output: {
    path: __dirname + '/server/public/',
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: __dirname + '/client',
      loaders: ['babel'],
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
