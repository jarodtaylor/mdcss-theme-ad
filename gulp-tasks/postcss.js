import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import csswring from 'csswring';
import postcssImport from 'postcss-import';
import math from 'postcss-math';

const processors = [
  postcssImport,
  cssnext({
    features: {
      customProperties: {
        warnings: false
      },
      autoprefixer: {
        browsers: ['last 2 versions']
      },
      calc: {
        precision: 10
      }
    }
  }),
  math,
  csswring
];

module.exports = function() {
  gulp.src('./src/css/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets'));
  gulp.src('./src/css/examples.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/examples'));
};
