var gulp = require('gulp');
var acss = require('gulp-atomizer');

gulp.task('acss', function() {
    return gulp.src('./src/*.html')
        .pipe(acss({
            // the filename of your output file.
            // Default is `atomic.css`
            outfile: 'atomic.css',
            // Configuration options to pass to atomizer.
            // This will have your variables, breakpoint definitions, etc.
            // Either `require` it from a separate file or include it inline
            acssConfig: require('./acssConf.js')
            // Custom css generation options to pass to atomizer's `getCSS` function.
            // This is an undocumented feature of atomizer, so I don't test for it.
            // cssOptions: {
            //     // namespace: '#atomic'
            // }
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function () {
    gulp.src(['src/img/*.*'])
        .pipe(gulp.dest('dist/img'));
});

gulp.task('html', function () {
    gulp.src(['src/*.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    gulp.src(['src/css/*.css'])
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['acss', 'css', 'img', 'html']);

return gulp.src('./*.html');
