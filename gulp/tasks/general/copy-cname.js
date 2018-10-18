const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        return gulp
            .src('CNAME')
            .pipe(gulp.dest('dist'))
    }
}