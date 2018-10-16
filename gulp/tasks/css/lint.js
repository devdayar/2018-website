const gulp = require('gulp')
const stylelint = require('gulp-stylelint')
const stylelintFormatter = require('stylelint-formatter-pretty')

module.exports = function(config) {
    return function() {
        return gulp.src(config.stylelint.css).pipe(
            stylelint({
                failAfterError: false,
                reporters: [
                    {
                        formatter: stylelintFormatter,
                        console: true
                    }
                ]
            })
        )
    }
}
