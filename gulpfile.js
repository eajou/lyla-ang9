var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch');

// SASS functions
gulp.task('sass', function () {
    return (
        gulp.src('ux/assets/sass/styles.scss')
 
        // Use sass with the files found, and log any errors
        .pipe(sass())
        .on("error", sass.logError)

        .pipe(gulp.dest("ux/assets/css"))
    );
});

// Clean the CSS
gulp.task('cleanCSS', function () {
    return gulp.src('ux/assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src'));    
});

// Watch the files
gulp.task('watch', function() {    
    watch('ux/assets/sass/**/*.scss', 
        gulp.series(['build:ux']));
});
    

/*
==============
 BUILD UX
==============
*/

gulp.task('build:ux', gulp.series('sass', 'cleanCSS'));