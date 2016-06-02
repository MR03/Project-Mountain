var path=require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')


// 输出注册参数Map

var configMap = {

}

module.exports = {
  entry: {
    index: './source/scripts/page/index',
    bank: './source/scripts/page/bank',
    round: './source/scripts/page/round'
  },
  output: {
    path: './app/js',
    filename: '[name].build.js'
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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style","css!sass")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
    ]
  },
  babel: {
    presets: ['es2015']
  },
  plugins: [
    new ExtractTextPlugin("../assets/css/[name].css"),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template:'./source/view/index.html',
      inject:true,
      filename:'../page/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['bank'],
      template:'./source/view/bank.html',
      inject:true,
      filename:'../page/bank.html'
    })
  ]
};