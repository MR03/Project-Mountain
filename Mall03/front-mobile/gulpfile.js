var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    mockServer = require('gulp-mock-server'),
    plumber = require('gulp-plumber'),
    revCollector = require('gulp-rev-collector');

var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var BP = {
    html: {
        baseDir: './',                                  //根路径
        src: './dist/html/**/*.html',         //监听文件
    },
    css: {
        src: 'dist/static/css/*.css'
    },
    js: {
        src: 'dist/script/**/*.js'
    },
    sass: {
        src: 'source/scss/**/*.scss',
        dist: 'dist/static/css',
    }
};
//默认任务,开发监听
gulp.task('default',['jade', 'sass'],function() {
    browserSync.init({
        server: {
            baseDir: BP.html.baseDir
        }
    });
    //jade
    gulp.watch(BP.jade.src,['jade']);
    //sass
    gulp.watch(BP.sass.src,['sass']);
    //page change
    gulp.watch(BP.html.src).on('change', reload);
    gulp.watch(BP.css.src).on('change', reload);
    gulp.watch(BP.js.src).on('change', reload);
});
gulp.task('sass', function() {
    gulp.src(BP.sass.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(BP.sass.dist))
});



