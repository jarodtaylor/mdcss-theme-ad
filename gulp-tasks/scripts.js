import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';

module.exports = function() {

	  browserify({ entries: 'src/javascripts/all.js', debug: true})
			.transform('babelify', { presets: ['es2015'] })
			.bundle()
			.pipe(source('scripts.js'))
			.pipe(buffer())
			// .pipe(uglify())
			.pipe(gulp.dest('./assets'));

};
