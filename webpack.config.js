const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|.jsx?$/, loaders: ['babel-loader'] }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static' }
    ])
  ],
  devServer: {
    contentBase: './dist',
    port: 8085
  },
};