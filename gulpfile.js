process.env.NODE_ENV = '"release"';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    gulpSequence = require('gulp-sequence'),
    miniPackageJson = require('./scripts/gulp-mini-package-json'),
    componentPropTypeJson = require('./scripts/gulp-component-prop-type-json');

function printError(e) {
    console.error(e.toString());
}

/**
 * sass compile
 */
gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .on('error', printError)
        .pipe(gulp.dest('./dist'));
});

/**
 * es compile
 */
gulp.task('es', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            plugins: ['transform-runtime']
        }))
        .on('error', printError)
        .pipe(gulp.dest('./dist'));
});

/**
 * copy extra files to dist
 */
gulp.task('copyAssets', function () {
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./dist/assets'));
});
gulp.task('copyNpmFiles', function () {
    return gulp.src(['README.md', './LICENSE'])
        .pipe(gulp.dest('./dist'));
});
gulp.task('copyPackageJson', function () {
    return gulp.src('./package.json')
        .pipe(miniPackageJson())
        .pipe(gulp.dest('./dist'));
});
gulp.task('copyFiles', gulpSequence('copyAssets', 'copyNpmFiles', 'copyPackageJson'));

/**
 * generate props type json include name, type, default and desc of components
 */
gulp.task('propType', function () {
    return gulp.src(['./src/**/*.js', '!./src/**/index.js'])
        .pipe(componentPropTypeJson())
        .pipe(rename(function (path) {
            path.dirname = '';
            path.extname = '.json';
        }))
        .pipe(gulp.dest('./examples/assets/propTypes'));
});

/**
 * build components for npm publish
 */
gulp.task('build', gulpSequence('sass', 'es', 'copyFiles'));

/**
 * watch components src files
 */
gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.js', ['es']);
});