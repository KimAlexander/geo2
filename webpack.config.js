const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'web',
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
