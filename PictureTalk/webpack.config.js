var webpack = require('webpack');
var path = require("path");

var config = {
    // 页面输出文件配置
    entry: {
        //remSetting: './node/scripts/rem.js',
        //common: './node/scripts/common.js',
        home: ['./node/scripts/app.home.c.js', './node/scripts/app.home.r.js']
    },
    // 输出配置
    output: {
        path: path.join(__dirname, 'app/js'),
        filename: '[name].react.js'
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