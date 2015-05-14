var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var less = require('gulp-less');
var source = require('vinyl-source-stream');

function onError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('javascript', function(){
  var b = browserify({
    entries: 'app.js',
    paths: './src',
    debug: false,
    transform: [babelify]
  });
  
  return b.bundle()
    .on('error', onError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('less', function() {
  gulp
    .src('./less/**/*.less')
    .pipe(less())
    .on('error', onError)
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['javascript']);
  gulp.watch(['./less/**/*.less'], ['less']);
});
 
gulp.task('build', ['javascript', 'less']);

gulp.task('default', ['build']);