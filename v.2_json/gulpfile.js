const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// Gulp tasks
gulp.task('processHTML', () => {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('processJS', () => {
  gulp.src('./js/*.js')
    .pipe(jshint({
      esversion: 8
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('babelPolyfill', () => {
  gulp.src('node_modules/babel-polyfill/browser.js')
    .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});

// Watch files
gulp.task('watch', ['browserSync'], () => {
  gulp.watch('*.html', ['processHTML'])
  gulp.watch('./js/*.js', ['processJS'])

  gulp.watch('dist/*.html', browserSync.reload)
  gulp.watch('dist/js/*.js', browserSync.reload)
});

// Live reload
gulp.task('browserSync', () => {
  browserSync.init({
    server: './dist',
    port: 8080,
    ui: {
      port: 8081
    }
  });
});

// Run default tasks
gulp.task('default', callback => {
  runSequence(['processHTML', 'processJS', 'babelPolyfill'], 'watch', callback);
});
