'use strict';

// Necessary Plugins
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var paths = require('../paths');

function server(done) {
  var files = [
    paths.browserSync.html,
    paths.browserSync.js,
    paths.browserSync.css,
    paths.browserSync.img,
  ];
  browserSync.init(files, {
    server: {
      baseDir: paths.build.html,
    },
    port: 3008,
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

module.exports = {
  server,
  reload,
};
