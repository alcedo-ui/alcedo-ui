process.env.NODE_ENV = '"release"';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    gulpSequence = require('gulp-sequence');

function printError(e) {
    console.error(e.toString());
}

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .on('error', printError)
        .pipe(gulp.dest('./dist'));
});

gulp.task('es', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            plugins: ['transform-runtime']
        }))
        .on('error', printError)
        .pipe(gulp.dest('./dist'));
});

gulp.task('copyAssets', function () {
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('copyNpmFiles', function () {
    return gulp.src(['./package.json', 'README.md', './LICENSE'])
        .pipe(gulp.dest('./dist'));
});
gulp.task('copyFiles', gulpSequence('copyAssets', 'copyNpmFiles'));

gulp.task('build', gulpSequence('sass', 'es', 'copyFiles'));

gulp.task('watch', function () {
    gulp.watch('./src/**', ['sass', 'es']);
});