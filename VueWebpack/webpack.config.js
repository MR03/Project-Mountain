// 包含模块
var path=require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

// 配置Map
var configMap = {
  // 统一名称
  name: [
    'template',
    'index'
  ]
}

// webpack配置
// 编译ES6的配置在.babelrc文件里
// 启动命令见package.json的scripts
var config = {
  // 获取入口js文件,格式shell.xxx.js
  // 现优化为函数
  // 单文件模式,前缀为shell
  entry: setEntry(configMap.name),
  // 输出
  output: {
    path: path.join(__dirname, 'app'),   //文件输出目录
    publicPath: '/',   // 配置文件发布路径，不用时注释掉
    filename: 'js/build.[name].js',   //根据入口文件输出的对应多个文件名,如果需要hash值,加上[hash]
    chunkFilename: 'js/chunk.[id].js'   //chunk生成的配置
  },
  // loader依赖
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  // loader配置
  // 简写
  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // 编译scss,导出独立css文件并添加浏览器前缀
        loader: ExtractTextPlugin.extract('style','css!autoprefixer?{"browsers":["last 2 versions", "> 5%", "iOS 7"]}!sass')
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // 导出独立css文件并添加浏览器前缀
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?{"browsers":["last 2 versions", "> 5%", "iOS 7"]}')
      },
    ]
  },
  vue: {
    loaders:{
      js:'babel'
    }
  },
  resolve: {
    // 配置别名，在项目中可缩减引用路径
    alias: {
      app: './config.app.js'   // 应用定义
    },
    // 补全文件后缀
    extensions: ['', '.vue', '.js', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),  // 代码热替换, 实验性功能,注意
    new webpack.NoErrorsPlugin(),   // 报错但不退出webpack进程
    // 提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      $: 'jquery',
      Vue: 'vue',
      resource: 'vue-resource'
    }),
    // 将公共代码抽离出来合并为一个文件
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'js/build.common.js',
      minChunks: 2
    }),
    // 单独输出css
    new ExtractTextPlugin('assets/css/build.[name].css'),
    // 页面模板输出配置用函数push
  ],
  // webpack-dev-server配置
  devServer: {
    port: 3000,
    contentBase: './app/',
    historyApiFallback: true,
    noInfo: true
    // 视情况配置代理
  },
  // 生成sourcemap,便于开发调试,不用可去掉
  devtool: '#eval-source-map'
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
// @return 配置对象
function htmlView(str) {
  return {
    chunks: [str],   // 需要引入的chunk，不配置就会引入所有页面的资源
    // source/wrap/template/template.html
    template: './source/modules/' + str + '/' + str +  '.html',   // html模板路径
    filename: './' + str + '.html',   // 生成的html存放路径
    inject: true,   // js插入的位置，true/'head'/'body'/false
    hash: true // hash值
  }
}

// 编译输出
if(process.env.NODE_ENV === 'production') {
  config.devtool = '#source-map'
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 文件压缩
    new UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      except: ['$', 'exports', 'require']    //排除关键字
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}

// 配置输出
module.exports = config;

