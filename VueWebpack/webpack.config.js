module.exports = {
  entry: './source/main',
  output: {
    path: './app',
    publicPath: '/app/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  },
  babel: {
    presets: ['es2015']
  },
  devServer: {
    hot: true,
    noInfo: true
  }
};