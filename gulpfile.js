// gulpfile.js
 
var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
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

gulp.task('watch', function(){
    gulp.watch(['./main.js', './src/**/*.js'], ['build'])
});
 
gulp.task('default', ['build', 'watch']);