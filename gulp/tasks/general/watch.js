const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        gulp.watch([config.watch.css, config.watch.html, config.watch.js], ['build'])
    }
}
