'use strict';

// Necessary Plugins
var gulp = require('gulp');

require('./fonts');
require('./imagemin');
require('./jade');
require('./js');
require('./stylus');

// dist task
module.exports = gulp.task(
  'dist',
  gulp.series('js', 'jade', 'stylus', 'imagemin', 'fonts')
);
