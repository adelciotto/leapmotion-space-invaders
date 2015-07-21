/*
 * ===========================================================================
 * File: scripts.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var util = require('util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var ngAnnotate = require('browserify-ngannotate');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('underscore');

gulp.task('scripts', function() {
    bundle(false);
});

gulp.task('scripts:watch', function() {
    bundle(true);
});

var bundle = function(watch) {
    var bro;
    var ops = { debug: true, paths: ['./src'] };

    if (watch) {
        browserSync.init({ proxy: 'localhost:8000' });
        bro = watchify(browserify('./src/index.js',
            _.extend(watchify.args, ops)));
        bro.on('update', function() {
            rebundle(bro);
        });
    } else {
        bro = browserify('./src/index.js', ops);
    }

    bro.transform(babelify.configure({ compact: false }));
    bro.transform(ngAnnotate);

    var rebundle = function(bundler) {
        return bundler.bundle()
            .on('error', function(e) {
                util.log('Browserify Error: ', e);
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./dist'))
            .pipe(reload({ stream: true }));
    };

    return rebundle(bro);
};
