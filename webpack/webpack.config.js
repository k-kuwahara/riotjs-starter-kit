const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app : ['./src/index.js']
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{
          loader: 'riot-tag-loader',
          options: {
            hot: false
          }
        }]
      },
      {
        test: /\.js|\.tag$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: 'buble-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.tag', '.css']
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      RiotControl: 'riotcontrol'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // new ExtractTextPlugin({
    //   filename: '[name].[hash].css',
    //   disable: false,
    //   allChunks: true
    // })
  ],
  devServer: {
    contentBase: './build/',
    port: 1337,
    hot: true,
    inline: true
  }
};
