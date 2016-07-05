var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

// Scripts
gulp.task('scripts', ['clean'], function() {
  return gulp.src('src/*.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/'], {read: false})
    .pipe(clean());
});

// Default task
gulp.task('default', ['scripts'], function() {
});

