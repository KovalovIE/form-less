var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

// gulp.task('less', function () {
//     return gulp.src('./src/**/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('./dist/css'));
// });

// gulp.task('default', function () {
//     gulp.src('./src/**/*.less')
//         .pipe(watchLess('./src/**/*.less'))
//         .pipe(less())
//         .pipe(gulp.dest('./dist/css'));
// });

gulp.task('less', function() {
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/**/*.less', ['less']);
});
// gulp.task('run', function () {
//     gulp.src('less/file.less')
//         .pipe(watchLess('./src/**/*.less'))
//         .pipe(less())
//         .pipe(gulp.dest('./dist/css'));
// });