'use strict';

var gulp  = require('gulp');

require('./tasks/browser-sync');
require('./tasks/default');
require('./tasks/dist');
require('./tasks/fonts');
require('./tasks/imagemin');
require('./tasks/jade');
require('./tasks/js');
require('./tasks/stylus');
require('./tasks/watch');
