/*
 * gulpfile.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var fs = require('fs');
var runSequence = require('run-sequence');
var config = require('./gulp/config.js');
var files = fs.readdirSync('./gulp');

/**
 * Require each of the gulp tasks from the 'gulp/' folder.
 * Each task is split into it's own file to avoid having one large and difficult
 * to maintain gulp script.
 */
files.forEach(function(file) {
    try {
        require('./gulp/' + file);
    } catch(e) {
        console.error('Unable to require file: ' + file + ': ', e);
    }
});

/**
 * Define the 'build' task. This task only builds all the scripts and assets.
 * The server is not started, and the files are not watched.
 */
gulp.task('build', function(cb) {
    runSequence('clean', ['copy', 'assets'], ['jshint', 'scripts'], cb);
});

/**
 * Define the 'start' task. This task simply builds all the scripts and assets;
 * then starts the server. No files will be watched. This task it suitable to
 * simulate a production environment.
 */
gulp.task('start', function(cb) {
    runSequence('build', 'serve', cb);
});

/**
 * Define the 'watch' task. This task watches all es6 source files; rebuilding
 * them and refreshing the browser on saved changes. This task is suitable for
 * development.
 */
gulp.task('watch', function(cb) {
    runSequence(['copy', 'assets'], ['jshint', 'scripts:watch'], 'serve', cb);
});

/**
 * Simply running 'gulp' at the command line will by default run the watch task.
 */
gulp.task('default', ['watch']);
