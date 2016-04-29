//gulp配置

    // 基础模块
var gulp = require('gulp'),
    // 添加css后缀
    autoprefixer = require('gulp-autoprefixer'),
    // 文件合并
    concat = require('gulp-concat'),
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
    //
    livereload = require('gulp-livereload');

    // 基础参数, BP = Basic Params
var BP = {
    jade: {
        src: './page/****/***/**/*.jade',
        dist: '../app/web/page/',
        appDist: '../out/artifacts/app_war_exploded/page/'
    },
    sass: {
        src: './scss/****/***/**/*.scss',
        dist: '../app/web/static/css/',
        appDist: '../out/artifacts/app_war_exploded/static/css/'
    },
    scripts: {
        src: './scripts/****/***/**/*.js',
        dist:'../app/web/js',
        appDist: '../out/artifacts/app_war_exploded/js/'
    }
};
// 默认任务,开发监听
gulp.task('default',['jade', 'sass', 'scripts'],function() {
    livereload.listen();
    // jade
    gulp.watch(BP.jade.src,['jade']);
    // sass
    gulp.watch(BP.sass.src,['sass']);
    // script
    gulp.watch(BP.scripts.src,['scripts']);
});
//jade任务
gulp.task('jade', function() {
    return gulp.src(BP.jade.src)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(BP.jade.dist))
        .pipe(gulp.dest(BP.jade.appDist))
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
// angular打包
gulp.task('angular', function() {
    return gulp.src(['./lib/scripts/angular/angular.js','./lib/scripts/angular/angular-route.js'])
        .pipe(concat('angular-framework.js'))//合并后的文件名
        .pipe(gulp.dest('../app/web/js/lib/angular'))
        .pipe(gulp.dest('../out/artifacts/app_war_exploded/js/lib/angular'))
        .pipe(livereload());
});
// vue打包
gulp.task('vue', function() {
    return gulp.src(['./lib/scripts/vue/vue.js','./lib/scripts/vue/vue-resource.js'])
        .pipe(concat('vue-framework.js'))//合并后的文件名
        .pipe(gulp.dest('../app/web/js/lib/vue'))
        .pipe(gulp.dest('../out/artifacts/app_war_exploded/js/lib/vue'))
        .pipe(livereload())
});
// lib打包
gulp.task('scriptLib', function() {
    var f = gulpFilter(['**', '!*lib/scripts/angular/*.js']);
    return gulp.src('lib/scripts/**/*.js')
        .pipe(f)
        .pipe(gulp.dest('../app/web/js/lib'))
        .pipe(gulp.dest('../out/artifacts/app_war_exploded/js/lib'))
        .pipe(livereload())
});
// lib打包
gulp.task('styleLib', function() {
    //var f = gulpFilter(['**', '!*lib/scripts/angular/*.js']);
    return gulp.src('lib/style/**/*.css')
        //.pipe(f)
        .pipe(gulp.dest('../app/web/static/css/lib'))
        .pipe(gulp.dest('../out/artifacts/app_war_exploded/static/css/lib'))
        .pipe(livereload());
});

