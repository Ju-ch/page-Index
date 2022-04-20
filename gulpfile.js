var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass')(require('sass'));
var plumber = require('gulp-plumber');

/*
* Compile and minify sass
*/
gulp.task('sass', async() => {
  	gulp.src('dev/styles/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(csso())
		.pipe(gulp.dest('assets/css/'));
});

/**
 * Compile and minify js
 */
gulp.task('js', async() => {
	return gulp.src('dev/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
});

gulp.task('default', gulp.series(['js', 'sass']));
