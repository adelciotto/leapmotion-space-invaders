/*
 * ===========================================================================
 * File: jshint.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src(['./src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-summary'));
});
