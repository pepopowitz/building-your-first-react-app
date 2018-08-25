'use strict';

// Necessary Plugins
var gulp  = require('gulp');
var paths = require('../paths');
var reload = require('./browser-sync').reload;
// Call Watch
module.exports = gulp.task('watch', function() {
  gulp.watch([paths.source.slides, paths.source.templates], gulp.series('jade', reload));
  gulp.watch(paths.source.js, gulp.series('js', reload));
  gulp.watch(paths.source.styl, gulp.series('stylus', reload));
  gulp.watch(paths.source.img, gulp.series('imagemin', reload));
});
