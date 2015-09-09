/*
 * start.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var _ = require('underscore');

_.each(global.BuildMode, function(val, key) {
    gulp.task('start:' + val, function() {
        return start(val);
    });
});

function start(mode) {
    if (mode === global.BuildMode.WATCH) {
        livereload.listen();

        // watch over all assets
        gulp.watch('./index.html', ['copy']);
        gulp.watch(global.paths.res, ['assets']);
    }

    return connect.server({
        root: global.paths.dist,
        port: 8000
    });
}
