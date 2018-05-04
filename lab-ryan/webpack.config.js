const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/main.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle-[hash].jsx',
  },  
  module: {
    rules: [
      {test: /\.(jsx?$)/, loader: ["babel-loader"], exclude: /node_modules/},
      {test: /\.s?css$/, loader: ["style-loader", "css-loader", "sass-loader"]},
    ]
  },
  plugins: [
    new HtmlPlugin({template: __dirname + '/src/index.html'})
  ],
};


module.exports = config;