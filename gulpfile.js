var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    gulpSequence = require('gulp-sequence');

gulp.task('clean', function () {
    return gulp.src('./dist/**', {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./lib/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('es6', function () {
    return gulp.src('./lib/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulpSequence('clean', 'sass', 'es6'));