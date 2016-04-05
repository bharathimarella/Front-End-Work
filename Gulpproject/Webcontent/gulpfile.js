var gulp=require('gulp');

gulp.task("mytask",function(a) {
	return console.log('gulp is running');
});
var concat = require('gulp-concat');
 
gulp.task('styles', function() {
  return gulp.src('./Style/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('default',['mytask','compress','styles']);
var minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('Script/*.js')
    .pipe(minify({
        
    }))
    .pipe(gulp.dest('./dist/'))
});