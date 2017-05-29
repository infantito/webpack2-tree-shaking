const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${process.cwd()}/src/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${process.cwd()}/dist`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({ title: 'Tree-shaking' })]
};