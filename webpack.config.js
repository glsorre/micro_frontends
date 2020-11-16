const path = require('path');

module.exports = {
  entry: {
    index: { import: './src/index.js', filename: 'index.js' },
    router: { import: './src/router.js', filename: 'router.js' }
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
  devtool: "source-map"
}