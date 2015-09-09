/*
 * copy.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var config = require('./config');

gulp.task('copy:index', function() {
    return gulp.src(['./index.html', './favicon.ico'])
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('copy:vendor', function() {
    gulp.src(config.vendorFiles)
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['copy:index', 'copy:vendor']);
