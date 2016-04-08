//gulp配置

    // 基础模块
var gulp = require('gulp'),
    // 添加css后缀
    autoprefixer = require('gulp-autoprefixer'),
    // 文件合并
    concat = require('gulp-concat'),
    // 提示
    notify = require('gulp-notify'),
    // sass
    sass = require('gulp-sass'),
    // jade
    jade = require('gulp-jade'),
    // js压缩
    uglify = require('gulp-uglify'),
    // 错误处理
    plumber = require('gulp-plumber'),
    // 文件排除
    gulpFilter = require('gulp-filter'),
    //  ES6->ES5
    babel = require('gulp-babel'),
    // mock模拟
    mockServer = require('gulp-mock-server');

    // 浏览器自动刷新
var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    // 基础参数, BP = Basic Params
var BP = {
    html: {
        baseDir: '../app/web',                                              //根路径
        src: '../app/web/mobile/**/*.html'                         //监听文件,在某些情况下,browser-sync刷新有点问题
    },
    css: {
        src: '../app/web/static/css/**/*.css'          //输出目录全部文件
    },
    js: {
        src: '../app/web/script/**/*.js'
    },
    sass: {
        src: './sass/**/*.scss',                                //sass文件
        dist: '../app/web/static/css/'            //输出目录
    },
    script: {
        src: './script/**/*.js',
        dist:'../app/web/script'
    }
};
// 默认任务,开发监听
gulp.task('default',['sass', 'script'],function() {
    browserSync.init({
        server: {
            baseDir: BP.html.baseDir
        }
    });

    // sass
    gulp.watch(BP.sass.src,['sass']);
    // script
    gulp.watch(BP.script.src,['script']);
    // page reload(html/css/js)
    gulp.watch(BP.html.src).on('change', reload);
    gulp.watch(BP.css.src).on('change', reload);
    gulp.watch(BP.js.src).on('change', reload);
});
//sass任务
gulp.task('sass', function() {
    gulp.src(BP.sass.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(BP.sass.dist))
});
gulp.task('script', function() {
    return gulp.src(BP.script.src)
        .pipe(babel({
            presets: ['es2015']
        }))

        .pipe(gulp.dest(BP.script.dist));
});



