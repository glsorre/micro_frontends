const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: { import: './src/index.js', filename: 'index.js' },
    navigation: { import: './src/navigation.js', filename: 'navigation.js' }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.css", to: "./index.css" },
      ],
    }),
  ],
}