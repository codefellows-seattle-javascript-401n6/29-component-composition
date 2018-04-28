const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/app.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle-[hash].js'
  },
  plugins: [new HtmlPlugin({template: `${__dirname}/index.html`})],
  module: {
    rules: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
};

module.exports = config;
