'use strict';

module.exports = {
    source: {
        templates: './src/templates/**/*.jade',
        slides: './src/slides/*.md',
        js: './src/js/**/*.js',
        styl: './src/styl/**/*.styl',
        img: './src/images/**/*',
        fonts: './src/fonts/**/*',
        files: {
            jade: './src/templates/index.jade',
            styl: './src/styl/*.styl'
        }
    },

    browserSync: {
        html: './build/**/*.html',
        css: './build/css/**/*.css',
        js: './build/js/**/*.js',
        img: './build/images/**/*',
        fonts: './build/fonts/**/*'
    },

    build: {
        html: './build/',
        css: './build/css',
        js: './build/js',
        img: './build/images',
        fonts: './build/fonts'
    },

    deploy: {
        pages: './build/**/*'
    }
};
