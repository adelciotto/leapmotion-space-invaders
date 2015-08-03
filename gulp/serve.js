/*
 * serve.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
    return connect.server({
        root: 'dist',
        port: 8000
    });
});
