var gulp = require('gulp');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');

gulp.task('default', function() {
  console.log("Gulp it up!!!");
  browserSync({
    server: {
      baseDir: "build/"
    }
  });
});

gulp.task('jade', function() {
  gulp.src('app/views/**/*.jade')
    .pipe(jade({ pretty: true}))
    .pipe(gulp.dest('build'));
});
