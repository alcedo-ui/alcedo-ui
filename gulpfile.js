var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    gulpSequence = require('gulp-sequence');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('es6', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('npm', function () {
    return gulp.src('./npm/**')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulpSequence('sass', 'es6', 'npm'));