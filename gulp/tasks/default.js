'use strict';

// Necessary Plugins
var gulp = require('gulp');

var server = require('./browser-sync').server;
require('./dist');
require('./fonts');
require('./jade');
require('./js');
require('./stylus');
require('./watch');

// Default task
module.exports = gulp.task(
  'default',
  gulp.series(
    'js',
    'jade',
    'stylus',
    'fonts',
    server,
    'watch',
  )
);
