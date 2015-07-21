/*
 * ===========================================================================
 * File: clean.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(done) {
    del(['./dist'], done);
});
