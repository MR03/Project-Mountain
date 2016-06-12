// 包含模块
var path=require('path')
var webpack = require('webpack')
var glob = require('glob')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin
var NoErrorsPlugin = webpack.NoErrorsPlugin
var ProvidePlugin = webpack.ProvidePlugin
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin
var DefinePlugin = webpack.DefinePlugin

// 配置Map
var configMap = setSourceMap()

// webpack配置
// 编译ES6的配置在.babelrc文件里
// 启动命令见package.json的scripts
var config = {
  // 获取入口js文件,格式shell.[模块名].[页面名].js
  // 优化为函数
  entry: configMap.entry,
  // 输出
  output: {
    path: path.join(__dirname, 'app'),   //文件输出目录
    publicPath: '/',   // 配置文件发布路径，不用时注释掉
    filename: 'assets/js/[name].build.js',   //根据入口文件输出的对应多个文件名,在构建输出时如果需要hash值,加上[hash]
    chunkFilename: 'assets/js/chunk.[id].js'   //chunk生成的配置
  },
  // loader依赖
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  // loader配置
  // 简写
  // babel设置在.babelrc里
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
      {
        test: /\.(png|jpg|gif|jpeg)$/, // 新图片文件格式要添加在此
        exclude: /node_modules/,
        loader: 'url?limit=10240&name=assets/img/[name].[ext]?[hash]' // ext是文件格式,小于10k的转base64
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html"
      }
    ]
  },
  // vue配置，合并输出css
  vue: {
    loaders:{
      js: 'babel',
      css: ExtractTextPlugin.extract('vue-style', 'css'),
      scss: ExtractTextPlugin.extract('vue-style', 'css!sass')
    }
  },
  resolve: {
    // 配置别名，在项目中可缩减引用路径
    alias: {
      app: path.join(__dirname, 'source/config.app.js')   // 应用定义
    },
    // 补全文件后缀
    extensions: ['', '.vue', '.js', '.json', '.css', '.scss', '.png', '.jpeg', '.jpg']
  },
  plugins: [
    new HotModuleReplacementPlugin(),  // 代码热替换, 实验性功能,注意
    new NoErrorsPlugin(),   // 报错但不退出webpack进程
    // 提供全局的变量，在模块中使用无需用require引入
    new ProvidePlugin({
      $: 'jquery',
      Vue: 'vue',
      resource: 'vue-resource'
    }),
    // 将公共代码抽离出来合并为一个文件
    new CommonsChunkPlugin({
      name: 'common/common',
      filename: './assets/js/common/common.build.js',
      minChunks: 2
    }),
    // 单独输出css
    new ExtractTextPlugin('assets/css/[name].build.css')
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

// 根据注册参数自动获取SourceMap
// @return 参数对象
function setSourceMap() {
  var sourceMap = {
    entry: {},
    html: {}
  }

  glob.sync('./source/*/*.js').forEach(function(name){

    // 根据shell为起点切割字符串
    var key = name.slice(name.lastIndexOf('shell') + 6, name.length - 3)
    // 将bank.index形式转化为bank/index形式
    key = key.replace('.', '/')
    // 组合成对象
    sourceMap.entry[key] = name
  })

  glob.sync('./source/**/*/tpl.*.html').forEach(function(name){
    // 根据shell为起点切割字符串
    var key = name.slice(name.lastIndexOf('source') + 7, name.lastIndexOf('tpl') - 1)

    // 组合成对象
    sourceMap.html[key] = {
      template_url: name,
      file_url: key + '.html'
    }
  })

  return sourceMap
}

// HtmlWebpackPlugin配置对象push到config里
// @params obj: 参数对象
// @return true
function htmlPush(obj) {
  for( i in obj) {
    config.plugins.push(new HtmlWebpackPlugin({
          chunks: [i],   // 需要引入的chunk，不配置就会引入所有页面的资源
          template: obj[i].template_url,   // html模板路径
          filename: './view/' + obj[i].file_url,   // 生成的html存放路径
          inject: true,   // js插入的位置，true/'head'/'body'/false
          hash: true  // hash值
        }))
  }
  return true
}
htmlPush(configMap.html)

// 编译输出
if(process.env.NODE_ENV === 'production') {
  // sourcemap格式修改
  config.devtool = '#source-map'
  config.plugins = (config.plugins || []).concat([
    new DefinePlugin({
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
    new OccurenceOrderPlugin()
  ])
}

// 配置输出
module.exports = config;

