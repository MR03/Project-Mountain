//gulp配置

    // 基础模块
var gulp = require('gulp'),
    // 添加css后缀
    autoprefixer = require('gulp-autoprefixer'),
    // sass
    sass = require('gulp-sass'),
    // jade
    jade = require('gulp-jade'),
    // 错误处理
    plumber = require('gulp-plumber'),
    // webpack
    //webpack = require('webpack'),
    // 自动刷新
    livereload = require('gulp-livereload');

    // 建立本地服务器并前端刷新
//var browserSync = require('browser-sync').create(),
//    reload = browserSync.reload;

    // 基础参数, BP = Basic Params
var BP = {
    server: {
        baseDir: './app'
    },
    html: {
        src: './app/**/*.html',
        dist: '../app/web',
        out: '../out/artifacts/app_war_exploded'
    },
    jade: {
        src: './source/page/**/*.jade',
        dist: './app/layout'
    },
    scss: {
        src: './source/scss/**/*.scss',
        dist: '../app/web/assets/css',
        out: '../out/artifacts/app_war_exploded/assets/css'
    },
    scripts: {
        src: './source/scripts/**/*.js',
        dist: '../app/web/js/*.js',
        out: '../out/artifacts/app_war_exploded/js'
    }
};
// 默认任务,开发监听
gulp.task('default',['jade', 'html', 'scss', 'scripts'],function() {

    // jade
    gulp.watch(BP.jade.src,['jade']);
    // html
    gulp.watch(BP.html.src,['html']);
    // sass
    gulp.watch(BP.scss.src,['scss']);
    // webpack
    //gulp.watch(BP.scripts.src,['webpack']);
    // scripts
    gulp.watch(BP.scripts.dist,['scripts']);

    livereload.listen();
});

//jade和html任务
// jade写layout,html组合
gulp.task('jade', function() {
    return gulp.src(BP.jade.src)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(BP.jade.dist))
});
gulp.task('html', function(){
    return gulp.src(BP.html.src)
        .pipe(plumber())
        .pipe(gulp.dest(BP.html.dist))
        .pipe(gulp.dest(BP.html.out))
        .pipe(livereload());
})
//sass任务
gulp.task('scss', function() {
    gulp.src(BP.scss.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(BP.scss.dist))
        .pipe(gulp.dest(BP.scss.out))
        .pipe(livereload());
});
gulp.task('scripts', function() {
    gulp.src(BP.scripts.dist)
        .pipe(plumber())
        .pipe(gulp.dest(BP.scripts.out))
        .pipe(livereload());
})
//gulp.task('webpack', function(callback) {
//    // 参数1: 注册信息
//    // 参数2: 回调函数,必须有!
//    webpack(require("./webpack.config.js"), function(err, stats) {
//        callback();
//    });
//});
