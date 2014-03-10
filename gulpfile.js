var gulp  = require('gulp')
  , jade  = require('gulp-jade')
  , clean = require('gulp-clean')
  ;

gulp.task('clean', function(){
  gulp
    .src('./*.html', {read: false})
    .pipe(clean());
});

gulp.task('build', function(){
  gulp
    .src('src/pages/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
  gulp.watch('src/pages/*.jade', ['build']);
});

gulp.task('default', ['build']);

