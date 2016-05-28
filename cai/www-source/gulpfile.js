//gulp配置

    // 基础模块
var gulp = require('gulp'),
    // 添加css后缀
    autoprefixer = require('gulp-autoprefixer'),
    // 错误处理
    plumber = require('gulp-plumber'),
    // sass
    scss = require('gulp-sass'),
    // 合并js
    concat = require('gulp-concat'),
    // jade
    jade = require('gulp-pug');

    // 浏览器自动刷新
var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    // 基础参数, BP = Basic Params
var BP = {
    server: {
        baseDir: './app',
    },
    jade: {
        source: './source/jade/**/*.jade',
        dist: './app',
        app: './app/*.html',
        out: '../www'
    },
    scss: {
        source: './source/scss/**/*.scss',
        dist: './app/assets/css',
        app: './app/assets/css/**/*.css',
        out: '../www/assets/css'
    },
    scripts: {
        // 防止随意改动lib里的库
        source: './source/scripts/lib/*.js',
        dist: './app/js',
        app: './app/js/*.js',
        out: '../www/js'
    }
};
// 默认任务,开发监听
gulp.task('default',['jade', 'scss', 'scripts'], function() {
    browserSync.init({
        server: {
            baseDir: BP.server.baseDir
        }
    });

    // jade任务监视
    gulp.watch(BP.jade.source,['jade']);
    // scss任务监视
    gulp.watch(BP.scss.source,['scss']);
    // scripts任务监视
    gulp.watch(BP.scripts.source,['scripts']);
    // page reload(html/css/js)
    gulp.watch(BP.jade.app).on('change', reload);
    gulp.watch(BP.scss.app).on('change', reload);
    gulp.watch(BP.scripts.app).on('change', reload);
});
//jade任务
gulp.task('jade', function() {
    return gulp.src(BP.jade.source)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(BP.jade.dist))
        .pipe(gulp.dest(BP.jade.out))
});
//sass任务
gulp.task('scss', function() {
    gulp.src(BP.scss.source)
        .pipe(plumber())
        .pipe(scss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(BP.scss.dist))
        .pipe(gulp.dest(BP.scss.out))
});

// 重写source
var scriptsArr = [
    './source/scripts/modules/test.js'
];
gulp.task('scripts', function() {
    return gulp.src(scriptsArr)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(BP.scripts.dist))
        .pipe(gulp.dest(BP.scripts.out))
});
gulp.task('lib', function() {
    return gulp.src(BP.scripts.source)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(BP.scripts.dist))
        .pipe(gulp.dest(BP.scripts.out))
});



