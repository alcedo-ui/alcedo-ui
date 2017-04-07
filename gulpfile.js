process.env.NODE_ENV = '"release"';

var gulp = require('gulp'),
    browserify = require('browserify'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    gulpSequence = require('gulp-sequence');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('es6', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            plugins: ['transform-runtime']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('npm', function () {
    return gulp.src('./npm/**')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulpSequence('sass', 'es6', 'npm'));

gulp.task('watch', function () {
    gulp.watch('./src/**', ['sass', 'es6']);
});