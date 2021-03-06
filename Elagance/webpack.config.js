var webpack = require('webpack');
var path = require("path");


var config = {
    // 页面输出文件配置
    entry: {
        // 测试
        //core: './source/scripts/elagance.test.js',
        //remSetting: './source/scripts/rem.js',
        eLead: ['./source/scripts/elagance.js', './source/scripts/elagance.lead.js'],
        eHome: ['./source/scripts/elagance.js', './source/scripts/elagance.home.shell.js'],
        test: ['./source/scripts/test/test.index.js','./source/scripts/test/test.todolist.js'],
        test2: './source/scripts/test2/index.js'
    },
    // 输出配置
    output: {
        path: path.join(__dirname, 'app/js'),
        filename: '[name].build.js'
    },
    module : {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;