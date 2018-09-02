process.env.NODE_ENV = '"release"';

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    gulpSequence = require('gulp-sequence'),
    miniPackageJson = require('./scripts/gulp-mini-package-json'),
    componentPropTypeJson = require('./scripts/gulp-component-prop-type-json');

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
 * copy files to dist
 */
gulp.task('copyES', function () {
    return gulp.src('./src/**/*.js')
               .pipe(babel({
                   plugins: ['@babel/runtime']
               }))
               .pipe(gulp.dest('./dist'));
});
gulp.task('copySASS', function () {
    return gulp.src('./src/**/*.scss')
               .pipe(gulp.dest('./dist'));
});
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
gulp.task('copy', gulpSequence('copyES', 'copySASS', 'copyAssets', 'copyNpmFiles', 'copyPackageJson'));