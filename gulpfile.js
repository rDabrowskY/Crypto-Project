const gulp = require('gulp');
const sass = require('node-sass');
const gulp_sass = require('gulp-sass')(sass);

gulp.task('sass', () => {
    return gulp.src('./scss/**/*.scss')
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));
