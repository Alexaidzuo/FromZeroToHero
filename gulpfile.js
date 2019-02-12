var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

// Tasks
gulp.task('sass', function() {
	return gulp.src('app/css/sass/**/*.sass') // Gets all files ending with .sass in app/css/sass
	  .pipe(sass())
	  .pipe(gulp.dest('app/css'))
	  .pipe(browserSync.reload({
		stream: true
	  }))
});
gulp.task('minify-css', function(){
	gulp.src('app/css/**/*.css')
		.pipe(minifyCSS())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('app/css'))
});
gulp.task('browserSync', function() {
	browserSync.init({
	  server: {
		baseDir: 'app'
	  },
	})
});
// Watch
gulp.task('watch', ['browserSync', 'sass', 'minify-css'], function (){
	gulp.watch('app/css/sass/**/*.sass', ['sass']); 
	gulp.watch('app/css/**/*.css', ['minify-css']);
	// Reloads the browser whenever HTML or JS files change
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.min.css', browserSync.reload); 
	gulp.watch('app/js/**/*.js', browserSync.reload); 
});