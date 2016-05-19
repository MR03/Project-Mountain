var webpack = require('webpack');
var path = require("path");


var config = {
    // 页面输出文件配置
    entry: {
        // 测试
        //core: './source/scripts/elagance.test.js',
        //remSetting: './source/scripts/rem.js',
        eLead: ['./source/scripts/elagance.js', './source/scripts/elagance.lead.js'],
        eHome: ['./source/scripts/elagance.js', './source/scripts/elagance.home.shell.js']
    },
    // 输出配置
    output: {
        path: '../app/web/js',
        filename: '[name].build.js'
    },
    module : {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}

module.exports = config;