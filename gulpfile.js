// gulpfile.js
 
var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
 
gulp.task('build', function () {
  browserify({
    entries: './main.js',
    debug: false
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('less', function() {
  gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
  gulp.watch(['./main.js', './src/**/*.js'], ['build'])
  gulp.watch('./less/**/*.less', ['less'])
});
 
gulp.task('default', ['build', 'watch', 'less']);