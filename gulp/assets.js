/*
 * ===========================================================================
 * File: assets.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cached = require('gulp-cached');

/**
 * Define a task to minimise all images used
 * in the game.
 */
gulp.task('assets:imagemin', function() {
    return gulp.src('./res/img/*.png')
        .pipe(cached('imagemin'))
        .pipe(gulp.dest('./dist/res/img'));
});

/**
* Define a task to copy all the resources into the dist folder
* to be hosted by the server. ''res/img' is excluded because all the
* images in that folder were optimised and already moved to the dist folder.
*/
gulp.task('assets:copy', function() {
    return gulp.src(['./res/**/*', '!./res/img'])
        .pipe(gulp.dest('./dist/res'));
});

gulp.task('assets', ['assets:imagemin', 'assets:copy']);
