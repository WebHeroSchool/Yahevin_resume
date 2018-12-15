const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const postcssPresetEnv = require('postcss-preset-env');
const postcssShort = require('postcss-short');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const rename = require('gulp-rename');
const glob = require("glob");

const path = {
	src: {
		dir: 'src',
		script: 'src/*.js',
		style: 'src/*.css'
	},
	buildFolder: {
		dir: 'build',
		script: 'build/js',
		style: 'src/build/css',
		images: 'build/images',
		fonts: 'build/fonts'
	}
}

gulp.task('buildCss', () => {
	const plugins = [
		postcssPresetEnv,
		nested,
		postcssShort({ skip: '-' }),
		autoprefixer({
			browsers: ['last 2 version']
			}),
		],
	processors = [			
		assets({
			loadPaths: ['../images', 'src/images']
		})]
	return gulp.src([path.src.style])
		.pipe(postcss(processors))
		.pipe(postcss(plugins))
		.pipe(gulp.dest(path.buildFolder.style));
});
gulp.task('buildJs', () => {
	return gulp.src([path.src.script])
	    .pipe(concat(path.buildName.script))
		.pipe(gulp.dest(path.buildFolder.script))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
	gulp.watch(path.src.style, ['buildCss-watch']);
		
});
gulp.task('buildCss-watch', ['buildCss'], () => browserSync.reload());
gulp.task('dev', ['buildCss','browser-sync']);