var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var path = require('path');
var browsersync = require('browser-sync').create();

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(csso())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function (cb) {
  return gulp.src([
      './src/js/app.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('server', function() {
  browsersync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./src/less/*.less', ['less']).on('change', browsersync.reload);
  // gulp.watch('./src/js/*.js', ['js']).on('change', browsersync.reload);
  gulp.watch('./index.html').on('change', browsersync.reload);
});

gulp.task('default', ['server', 'less']);
