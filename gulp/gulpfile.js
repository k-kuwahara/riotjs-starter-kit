const gulp    = require('gulp'),
      riot    = require('gulp-riot'),
      uglify  = require('gulp-uglify'),
      rename  = require('gulp-rename'),
      plumber = require('gulp-plumber'),
      eslint  = require('gulp-eslint'),
      buble   = require('gulp-buble'),
      concat  = require('gulp-concat')

const errorHandler = require('./error_handler')

// list of path
const paths = {
   es6_dir  : 'src/es6/',
   js_dir   : 'js/**/*.js',
   tag_dir  : 'src/**/*.tag',
   build_dir: 'build'
}

// check by eslint & compile es6
gulp.task('eslint', () => {
   gulp.src(paths.js_dir)
       .pipe(plumber(errorHandler))
       .pipe(eslint.format())
       .pipe(eslint.failOnError())
       .pipe(gulp.dest('js'))
})

// compile
gulp.task('riot', () => {
  gulp.src(paths.tag_dir)
      .pipe(plumber(errorHandler))
      .pipe(riot({
         compact: true,
         type: 'es6',
      }))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('js'))
})

// buble
gulp.task('buble', () => {
    gulp.src(paths.js_dir)
        .pipe(plumber(errorHandler))
        .pipe(buble({
            transforms: {
                arrow: true,
                modules: false,
                generator: false
            }
        }))
        .pipe(gulp.dest('js'))
})

// minify
gulp.task('minify', () => {
    gulp.src(paths.js_dir)
        .pipe(plumber(errorHandler))
        .pipe(uglify())
        .pipe(gulp.dest(paths.build_dir))
})


// compile by series
gulp.task('compile', ['riot', 'eslint', 'buble', 'minify'])

gulp.task('watch', () => {
   gulp.watch('src', ['compile']);
});

// execute all tasks
gulp.task('default', ['watch']);
