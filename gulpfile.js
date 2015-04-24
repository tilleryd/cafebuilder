var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
 
gulp.task('build', function() {
  browserify({
    entries: 'main.js',
    paths: './src',
    debug: false
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist'));

  gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', 'build');
  gulp.watch('./less/**/*.less', 'build');
});
 
gulp.task('default', ['build', 'watch']);