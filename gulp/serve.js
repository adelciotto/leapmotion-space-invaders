/*
 * ===========================================================================
 * File: serve.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
    return connect.server({
        root: 'dist',
        port: 8000
    });
});
