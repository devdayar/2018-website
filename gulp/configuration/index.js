const packageJSON = require('../../package.json')
const util = require('gulp-util')

module.exports = {
    browserify: {
        isDebug: !util.env.production === false
    },
    clean: {
        assets: 'dist/assets/*',
        css: 'dist/css/*',
        html: 'dist/*.html',
        js: 'dist/js/*',
        manifest: 'dist/**/manifest.json'
    },
    dest: {
        assets: 'dist/assets',
        css: 'dist/css',
        html: 'dist/',
        js: 'dist/js',
        manifest: 'dist/**/manifest.json'
    },
    eslint: {
        files: 'src/js/**/*.js'
    },
    isProduction: util.env.production,
    src: {
        assets: 'src/assets/**/*.*',
        css: 'src/css/main.css',
        html: 'src/*.html',
        js: 'src/js/*.js'
    },
    staticServer: {
        dir: './dist',
        name: packageJSON.name
    },
    stylelint: {
        css: 'src/css/**/*.css'
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/*.html',
        js: 'src/js/**/*.js'
    }
}
