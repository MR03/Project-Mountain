//gulp配置

    // 基础模块
var gulp = require('gulp');

    // 浏览器自动刷新
var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    // 基础参数, BP = Basic Params
var BP = {
    server: {
        baseDir: './app',
    },
    html: {
        src: './app/*.html'
    },
    css: {
        src: './app/css/*.css'
    },
    js: {
        src: './app/js/*.js'
    }
};
// 默认任务,开发监听
gulp.task('default',function() {
    browserSync.init({
        server: {
            baseDir: BP.server.baseDir
        }
    });

    // page reload(html/css/js)
    gulp.watch(BP.html.src).on('change', reload);
    gulp.watch(BP.css.src).on('change', reload);
    gulp.watch(BP.js.src).on('change', reload);
});



