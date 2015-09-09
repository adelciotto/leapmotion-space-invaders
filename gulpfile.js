/*
 * gulpfile.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var gulp = require('gulp');
var requireDir = require('require-dir');
var runSeq = require('run-sequence');
var _ = require('underscore');

// specify some global paths for the gulp tasks
global.paths = {
    root: '.',
    js: './src',
    res: './res',
    dist: './dist',

    get scripts() { return this.js + '/**/*.js'; },
    get jsEntry() { return this.js + '/index.js'; }
};

// define a readable enum for the different build modes
global.BuildMode = {
    DEV: 'dev',
    PROD: 'prod',
    WATCH: 'watch'
};

// Require each of the gulp tasks from the 'gulp/' folder.
// Each task is split into it's own file to avoid having one large and difficult
// gulp script to maintain.
requireDir('./gulp', { recurse: true });

_.each(global.BuildMode, function(val, key) {
    // define the build task for each different build mode
    gulp.task('build:' + val, function(done) {
        runSeq('copy', 'assets', ['scripts:' + val], done);
    });

    // define the main tasks for each different build mode
    gulp.task(val, function(done) {
        runSeq('clean', 'build:' + val, 'start:' + val, done);
    });
});

// make the default task 'gulp watch' for now..
gulp.task('default', ['watch']);
