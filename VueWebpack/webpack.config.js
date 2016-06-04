// 包含模块
var path=require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

// 配置Map
var configMap = {
  name: [
    'index',
    'bank',
    'round'
  ]
}

// webpack配置
// 编译ES6的配置在.babelrc文件里
// 启动命令键package.json的scripts
var config = {
  // 获取入口js文件,格式shell.xxx.js
  // 后续优化为函数
  entry: setEntry(configMap.name),
  // 输出
  output: {
    path: path.join(__dirname, 'app'),   //文件输出目录
    publicPath: "/",   // 配置文件发布路径，不用时注释掉
    filename: 'js/build.[name].js',   //根据入口文件输出的对应多个文件名
    chunkFilename: 'js/chunk.[id].js'   //chunk生成的配置
  },
  // loader依赖
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  // loader使用简写
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
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
  resolve: {
    // 配置别名，在项目中可缩减引用路径
    // 暂无, 留空
    alias: {
      //
    }
  },
  plugins: [
    // 提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      $: 'jquery',
      Vue: 'vue'
    }),
    // 将公共代码抽离出来合并为一个文件
    new CommonsChunkPlugin('js/common.js'),
    // js文件的压缩
    new UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$', 'exports', 'require']    //排除关键字
    }),
    // 单独输出css
    new ExtractTextPlugin("assets/css/[name].css"),
    // 页面模板输出配置用函数push
  ],
  // webpack-dev-server配置
  devServer: {
    contentBase: './app/',
    historyApiFallback: true,
    noInfo: true
  },
  // 生成sourcemap,便于开发调试,不用可去掉
  devtool: 'eval'
};

// 根据注册参数自动获取entry
// @params arr:模板数组
// @return 参数对象
function setEntry(arr) {
  var entry = {}
  for( i in arr ) {
    entry[arr[i]] = './source/shell.' + arr[i]
  }
  return entry
}

// HtmlWebpackPlugin配置对象push到config里
// @params arr:模板数组
// @return true
function htmlPush(arr) {
  for( i in arr) {
    config.plugins.push(new HtmlWebpackPlugin(htmlView(arr[i])))
  }
  return true
}
// 配置
htmlPush(configMap.name)

// HtmlWebpackPlugin配置对象函数
// @params str:view文件前缀
// @return 单例对象
function htmlView(str) {
  return {
    chunks: [str],   // 需要引入的chunk，不配置就会引入所有页面的资源
    template: './source/view/' + str + '.html',   // html模板路径
    filename: './' + str + '.html',   // 生成的html存放路径
    inject: 'true'   // js插入的位置，true/'head'/'body'/false
  }
}

// 配置输出
module.exports = config;

