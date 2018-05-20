const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: `${__dirname}/src/main.jsx`,
  devtool: 'source-map',
  plugins: [new HtmlPlugin({ template: __dirname + '/src/index.html' })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
};

module.exports = config;
