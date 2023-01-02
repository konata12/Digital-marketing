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

// min_css
let min_css = () => {
    return src([
        './app/libs/bootstrap/dist/css/bootstrap.min.css',
        './app/libs/owl.carousel/dist/assets/owl.carousel.min.css',
        './app/css/fonts.css',
        './app/css/general.css',
        './app/css/main.css'
    ])
    .pipe(concat('final.css'))
    .pipe(cleanCSS())
    .pipe(rename({
			suffix: ".min",
		}))
    .pipe(dest('./app/css'))
}

// js_uglify
let min_js = () => {
    return src([
        './app/libs/jquery/dist/jquery.min.js',
        './app/libs/bootstrap/dist/js/bootstrap.bundle.min.js',
        './app/libs/owl.carousel/dist/owl.carousel.min.js',
        './app/js/*',
        '!./app/js/final.min.js'
    ])
    .pipe(concat('final.js'))
    .pipe(uglify())
    .pipe(rename({
			suffix: ".min",
		}))
    .pipe(dest('./app/js'))
}

// clean dist
let clean = async () => {
	await del('dist/');
	console.log('Папка dist вилучена');
}

// build
let build = () => {
	return src([
		'app/css/final.min.css',
		'app/js/final.min.js',
        'app/img/**',
        'app/fonts/**',
		'app/*.html',
	], {base: 'app'})
    .pipe(dest('dist'))
}


// Creating gulp exports
exports.fromPreprocessor = from_preprocessor;
exports.generalLess = general_less;
exports.build = series(clean, min_css, min_js, build)
