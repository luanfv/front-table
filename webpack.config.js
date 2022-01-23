const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "development",
  devtool: isDev ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: 'svg-inline-loader'
      }
    ]
  }
}