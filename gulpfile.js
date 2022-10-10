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

// Creating gulp task

// from_preprocessor
let from_preprocessor = () => {
    return src([
        `./app/${ preprocessor }/styles.${ preprocessor }`
    ])
        .pipe(concat('main.css'))
		.pipe(eval(preprocessor)())
		.pipe(autoprefixer({
			grid: true,
			cascade: true
		}))
		.pipe(dest('./app/css'))
}


// Creating gulp exports
exports.fromPreprocessor = from_preprocessor
