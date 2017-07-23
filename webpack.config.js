'use strict'
const path = require('path')
const liveReloadPkugin = require('webpack-livereload-plugin')

const USE_FAST_SOURCE_MAPS = false

module.exports = {
  entry: './app/main.jsx',
  output: {
    filename: './public/bundle.js',
    path: __dirname
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    }]
  }
}
