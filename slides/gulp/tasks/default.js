'use strict';

// Necessary Plugins
var gulp = require('gulp');

var server = require('./browser-sync').server;
console.log(server);
require('./dist');
require('./fonts');
require('./imagemin');
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
    'imagemin',
    'fonts',
    server,
    'watch',
  )
);
