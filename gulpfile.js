var gulp = require('gulp'),
	compass = require('gulp-compass'),
	watch = require('gulp-watch'),
    path = require('path');

function handleError() {
    console.log('Error');
}

gulp.task('compass', function() {
    gulp.src('./assets/sass/*.scss')
        .pipe(compass({
            project: path.join(__dirname, 'assets'),
            css: 'css',
            sass: 'sass',
            style: 'compress',
            comments: 'false'
        }))
        .on('error',handleError)
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.scss', ['compass']);
});

// Default Task
gulp.task('default', ['watch']);