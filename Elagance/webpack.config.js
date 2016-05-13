var webpack = require('webpack');
var path = require("path");

var config = {
    // 页面输出文件配置
    entry: {
        remSetting: './source/scripts/rem.js',
        eLead: ['./source/scripts/elagance.js', './source/scripts/elagance.lead.shell.js']
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
                    presets: ['es2015']
                }
            }
        ]
    }
}

module.exports = config;