const gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    miniPackageJson = require('./scripts/gulp-mini-package-json'),
    componentPropTypeJson = require('./scripts/gulp-component-prop-type-json');

/**
 * generate props type json include name, type, default and desc of components
 */
gulp.task('propType', () =>
    gulp.src(['./src/**/*.js', '!./src/**/index.js'])
        .pipe(componentPropTypeJson())
        .pipe(rename(path => {
            path.dirname = '';
            path.extname = '.json';
        }))
        .pipe(gulp.dest('./examples/assets/propTypes'))
);

/**
 * copy files to dist
 */
gulp.task('copyES', () =>
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: [['@babel/env', {modules: 'commonjs'}]],
            plugins: ['@babel/plugin-transform-runtime']
        }))
        .pipe(gulp.dest('./dist'))
);
gulp.task('copySASS', () =>
    gulp.src('./src/**/*.scss')
        .pipe(gulp.dest('./dist'))
);
gulp.task('copyAssets', () =>
    gulp.src('./assets/**')
        .pipe(gulp.dest('./dist/assets'))
);
gulp.task('copyNpmFiles', () =>
    gulp.src(['README.md', './LICENSE'])
        .pipe(gulp.dest('./dist'))
);
gulp.task('copyPackageJson', () =>
    gulp.src('./package.json')
        .pipe(miniPackageJson())
        .pipe(gulp.dest('./dist'))
);
gulp.task('copy', gulp.series('copyES', 'copySASS', 'copyAssets', 'copyNpmFiles', 'copyPackageJson'));