
'use strict';

var gulp = require('gulp');
var open = require('open');
var path = require('path');

// CSS
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('less', function () {
  return gulp.src(['less/loader.less'])
    .pipe(less({ paths: [ 'app/bower_components' ] }))
    .pipe(autoprefixer('last 1 version', '> 1%', 'ie 7'))
    .pipe(gulp.dest('example'));
});

gulp.task('default', ['less'], function () {
  gulp.watch(['less/*.less'], ['less']);
  open('file://' + path.resolve(__dirname + '/example/index.html'));
});
