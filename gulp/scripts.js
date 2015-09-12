/*
 * scripts.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var util = require('util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('underscore');

var browserifyConfig = {
    paths: global.paths.js
};

_.each(global.BuildMode, function(val, key) {
    gulp.task('scripts:' + val, ['jshint'], function() {
        bundle(val);
    });
});

function rebundle(mode, bundler) {
    var shouldReload = (mode === global.BuildMode.WATCH);
    var createSourceMaps = (mode === global.BuildMode.DEV || shouldReload);

    return bundler.bundle()
       .on('error', function(e) {
            util.log('Browserify Error: ', e);
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(createSourceMaps, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(createSourceMaps, sourcemaps.write()))
        .pipe(gulpif(!createSourceMaps, uglify()))
        .pipe(gulp.dest(global.paths.dist))
        .pipe(gulpif(shouldReload, livereload()));
}

function bundle(mode) {
    var bro;

    if (mode === global.BuildMode.DEV) {
        // if dev mode then make sure to pass debug flag
        bro = browserify(global.paths.jsEntry, _.extend(browserifyConfig, {
            debug: true
        }));
    } else if (mode === global.BuildMode.PROD) {
        bro = browserify(global.paths.jsEntry, browserifyConfig);
    } else if (mode === global.BuildMode.WATCH) {
        // if watch mode make sure to use watchify for fast rebundling
        bro = watchify(browserify(global.paths.jsEntry,
                    _.extend(watchify.args, browserifyConfig, { debug: true})));

        // on any es6 file change, perform a rebundle
        bro.on('update', function() {
            rebundle(mode, bro);
        });
    }

    bro.transform(babelify.configure({ compact: true }));
    return rebundle(mode, bro);
}
