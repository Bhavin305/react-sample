import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.scss']
  },
  module: {
    loaders: [
      { test: /\.js|.jsx?$/, loaders: ['babel-loader'] },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.css?$/,       
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        }) 
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'static' }
    ])
  ],
  devServer: {
    contentBase: './dist',
    port: 8085
  },
};