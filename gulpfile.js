// Preprocessor type
const preprocessor = 'less'

// Expanses import
let { src, dest, parallel, series, watch } = require('gulp');
let rename = require('gulp-rename');
// let browserSync = require('browser-sync').create();
let autoprefixer = require('gulp-autoprefixer');
// let cache = require('gulp-cache');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify');
let pngquant = require('imagemin-pngquant');

let del = require('del');
let less = require('gulp-less');

// Creating gulp tasks

// from_preprocessor
let from_preprocessor = () => {
    return src([
        `./app/${ preprocessor }/*.${ preprocessor }`,
        // !`./app/mixin.less`
    ])
        .pipe(concat('main.css'))
		.pipe(eval(preprocessor)())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(dest('./app/css'))
}



// Creating gulp exports
exports.fromPreprocessor = from_preprocessor
