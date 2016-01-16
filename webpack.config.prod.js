var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
}
