/*
 * copy.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';

const vendorFiles = [
    './node_modules/phaser/dist/phaser.min.js',
    './node_modules/phaser-debug/dist/phaser-debug.js'
];

// if in dev mode, add the source map for phaser
if (global.isDevEnv) {
    vendorFiles.push('./node_modules/phaser/dist/phaser.map');
}

gulp.task('copy:index', function() {
    gulp.src([global.paths.index, './favicon.ico'])
        .pipe(gulp.dest(global.paths.dist))
        .pipe(gulpif(global.isDevEnv, livereload()));
});

gulp.task('copy:vendor', function() {
    gulp.src(vendorFiles)
        .pipe(gulp.dest(global.paths.dist + '/js/vendor'));
});

gulp.task('copy', ['copy:index', 'copy:vendor']);
