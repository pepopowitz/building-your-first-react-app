'use strict';

// Necessary Plugins
var gulp = require('gulp');
var paths = require('../paths');

// copy fonts
module.exports = gulp.task('fonts', function () {
    return gulp.src(paths.source.fonts)
        .pipe(gulp.dest(paths.build.fonts));
});
