/*
 * gulp配置
 */


    // 基础模块
var gulp = require('gulp');

    // 建立本地服务器并前端刷新,写静态页面时用
var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    // 基础参数, BP = Basic Params
var BP = {
    server: {
        baseDir: './app',
        html: './app/*.html',
        css: './app/assets/css/**/*.css',
        js: './app/js/**/*.js'
    }
};
// 默认任务,开发监听
gulp.task('default',function() {
    browserSync.init({
        server: {
            baseDir: BP.server.baseDir
        }
    });

    //page change
    gulp.watch(BP.server.html).on('change', reload);
    gulp.watch(BP.server.css).on('change', reload);
    gulp.watch(BP.server.js).on('change', reload);
});