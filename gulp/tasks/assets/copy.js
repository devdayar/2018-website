const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const rev = require('gulp-rev')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.src.assets)
            .pipe(imagemin())
            .pipe(rev())
            .pipe(gulp.dest(config.dest.assets))
            .pipe(rev.manifest('manifest.json'))
            .pipe(gulp.dest(config.dest.assets))
    }
}
