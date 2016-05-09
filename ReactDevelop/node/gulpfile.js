//gulp配置

    // 基础模块
var gulp = require('gulp'),
    // 添加css后缀
    autoprefixer = require('gulp-autoprefixer'),
    // 文件合并
    concat = require('gulp-concat'),
    // sass
    sass = require('gulp-sass'),
    // 错误处理
    plumber = require('gulp-plumber'),
    // 文件排除
    gulpFilter = require('gulp-filter'),
    //
    livereload = require('gulp-livereload');

    // 基础参数, BP = Basic Params
var BP = {
    html: {
        src: './page/*.html',
        dist: '../app/web/html/',
        appDist: '../out/artifacts/app_war_exploded/html/'
    },
    sass: {
        src: './scss/*.scss',
        dist: '../app/web/css/',
        appDist: '../out/artifacts/app_war_exploded/static/css/'
    },
    scripts: {
        src: './scripts/*.js',
        dist:'../app/web/js',
        appDist: '../out/artifacts/app_war_exploded/js/'
    }
};
// 默认任务,开发监听
gulp.task('default',['html', 'sass', 'scripts'],function() {

    // html
    gulp.watch(BP.html.src,['html']);
    // sass
    gulp.watch(BP.sass.src,['sass']);
    // script
    gulp.watch(BP.scripts.src,['scripts']);

    livereload.listen();
});
// html
gulp.task('html', function() {
    return gulp.src(BP.html.src)
        .pipe(plumber())
        .pipe(gulp.dest(BP.html.dist))
        .pipe(gulp.dest(BP.html.appDist))
        .pipe(livereload());
});
//sass任务
gulp.task('sass', function() {
    gulp.src(BP.sass.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(BP.sass.dist))
        .pipe(gulp.dest(BP.sass.appDist))
        .pipe(livereload());
});
gulp.task('scripts', function() {
    return gulp.src(BP.scripts.src)
        .pipe(gulp.dest(BP.scripts.dist))
        .pipe(gulp.dest(BP.scripts.appDist))
        .pipe(livereload());
});


