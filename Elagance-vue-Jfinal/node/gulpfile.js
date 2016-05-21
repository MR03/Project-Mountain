/*
 * 该配置是实现UI时的配置
 */


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
    // 自动刷新
    livereload = require('gulp-livereload');

    // 建立本地服务器并前端刷新,写静态页面时用
var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    // 基础参数, BP = Basic Params
var BP = {
    server: {
        baseDir: './app'
    },
    jade: {
        src: './source/page/**/*.jade',
        dist: './app/layout',
        dist_file: './app/**/*.html'
    },
    scss: {
        src: './source/scss/**/*.scss',
        dist: './app/assets/css',
        dist_file: './app/assets/css/**/*.css'
    }
};
// 默认任务,开发监听
gulp.task('default',['jade', 'scss'],function() {
    browserSync.init({
        server: {
            baseDir: BP.server.baseDir
        }
    });

    // jade
    gulp.watch(BP.jade.src,['jade']);
    // sass
    gulp.watch(BP.scss.src,['scss']);
    //page change
    gulp.watch(BP.jade.dist_file).on('change', reload);
    gulp.watch(BP.scss.dist_file).on('change', reload);
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
//sass任务
gulp.task('scss', function() {
    gulp.src(BP.scss.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(BP.scss.dist))
});
