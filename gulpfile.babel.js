import gulp from 'gulp';

gulp.task('postcss', require('./gulp-tasks/postcss'));
gulp.task('scripts', require('./gulp-tasks/scripts'));

gulp.task('build', ['postcss', 'scripts']);
