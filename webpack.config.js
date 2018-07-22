const path = require('path');

module.exports = {
  mode: process.env === 'production' ? 'production' : 'development',

  devtool: 'inline-source-map',

  entry: ['babel-polyfill', path.resolve(__dirname, './client/index.js')],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'pray4j.bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
}