// 包含模块
var path=require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

// 注册参数Map
var configMap = {

}

// webpack配置
module.exports = {
  // 生成sourcemap,便于开发调试,不用可去掉
  devtool: 'source-map',
  // 获取项目入口js文件,格式shell.xxx.js/后续优化为函数?
  entry: {
    index : './source/shell.index',
    bank : './source/shell.bank',
    round: './source/shell.round'
  },
  output: {
    path: path.join(__dirname, 'app/js'),   //文件输出目录
    //publicPath: "/",   // 配置文件发布路径，不用时注释掉
    filename: '[name].build.js'   //根据入口文件输出的对应多个文件名
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
    presets: ['es2015'] // 编译ES6
  },
  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      //
    }
  },
  plugins: [
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      $: 'jquery',
      Vue: 'vue'
    }),
    //将公共代码抽离出来合并为一个文件
    new CommonsChunkPlugin('common.js'),
    //js文件的压缩
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // 单独输出css
    new ExtractTextPlugin("../assets/css/[name].css"),
    // 页面模板输出配置
    new HtmlWebpackPlugin(htmlView('index')),
    new HtmlWebpackPlugin(htmlView('bank')),
    new HtmlWebpackPlugin(htmlView('round'))
  ]
};

// HtmlWebpackPlugin配置对象函数
// @params str:view文件前缀
// @return 单例对象
function htmlView(str) {
  return {
    chunks: [str],
    template: './source/view/' + str + '.html',
    inject: true,
    filename: '../' + str + '.html'
  }
}