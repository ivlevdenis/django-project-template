var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './front/js/index',
  output: {
    path: path.resolve('./front/bundles/'),
    filename: "[name].js"
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'vue']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // vue-loader options go here
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: '#eval-source-map'
}
