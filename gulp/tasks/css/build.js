const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const postcss = require('gulp-postcss')
const postcssImport = require('postcss-import')
const rev = require('gulp-rev')
const uncss = require('gulp-uncss')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.src.css)
            .pipe(postcss([postcssImport, autoprefixer({ browsers: ['last 2 versions'] })]))
            .pipe(gulpIf(config.isProduction, uncss({ html: [config.src.html] })))
            .pipe(postcss([cssnano({ discardComments: { removeAll: true } })]))
            .pipe(rev())
            .pipe(gulp.dest(config.dest.css))
            .pipe(rev.manifest('manifest.json'))
            .pipe(gulp.dest(config.dest.css))
    }
}
