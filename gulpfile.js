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
        `!./app/${ preprocessor }/general.${ preprocessor }`,
        `!./app/${ preprocessor }/mixins.${ preprocessor }`
    ])
        .pipe(concat('main.css'))
		.pipe(eval(preprocessor)())
		.pipe(autoprefixer({ cascade: true }))
		.pipe(dest('./app/css'))
}

// general_less
let general_less = () => {
    return src(`./app/${ preprocessor }/general.${ preprocessor }`)
        .pipe(rename('general.css'))
        .pipe(eval(preprocessor)())
        .pipe(autoprefixer({ cascade: true }))
        .pipe(dest('./app/css'))
}



// Creating gulp exports
exports.fromPreprocessor = from_preprocessor;
exports.generalLess = general_less
