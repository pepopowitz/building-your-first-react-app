'use strict';

// Necessary Plugins
var gulp = require('gulp');

// dist task
module.exports = gulp.task('dist', ['js', 'jade', 'stylus', 'imagemin', 'fonts']);
