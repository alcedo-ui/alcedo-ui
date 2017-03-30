var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    gulpSequence = require('gulp-sequence');

gulp.task('clean', function () {
    return gulp.src('./lib/**', {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./lib'));
});

gulp.task('es6', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', gulpSequence('clean', 'sass', 'es6'));