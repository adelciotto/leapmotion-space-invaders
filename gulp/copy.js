/*
 * copy.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var rename = require('gulp-rename');
var config = require('./config');

gulp.task('copy:index', function() {
    return gulp.src(['./index.html', './favicon.ico'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy:vendor', function() {
    return gulp.src(config.vendorFiles)
        .pipe(rename(function(path) {
            path.dirname = '';
        }))
        .pipe(gulp.dest('./dist/vendor/'));
});

gulp.task('copy', ['copy:index', 'copy:vendor']);
