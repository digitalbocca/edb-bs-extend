const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const chalk = require('chalk')
const clean = require('gulp-clean-css')
const del = require('del')
const gulp = require('gulp')
const rename = require('gulp-rename')
const sassMonster = require('gulp-sass-monster')
const uglyfy = require('gulp-uglyfly')

const optionsSM = {}
const isSyncSM = true

const cleanFolder = () => {
  console.log(chalk.red('LIMPANDO A PASTA DE DISTRIBUIÇÃO'))
  return del([ './dist' ])
}

const compileJS = () => {
  let destino = './dist/js'
  return gulp
    .src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(destino))
    .pipe(uglyfy())
    .pipe(rename({
      basename: 'edb-bs-extend',
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(gulp.dest(destino))
}

const compileSASS = () => {
  let destino = './dist/css'
  return gulp
    .src('./src/sass/edb-bs-extend.sass')
    .pipe(sassMonster(optionsSM, isSyncSM).on('error', sassMonster.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(gulp.dest(destino))
    .pipe(clean())
    .pipe(rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest(destino))
}

gulp.task('del', cleanFolder)
gulp.task('sass', compileSASS)
gulp.task('js', compileJS)
gulp.task('build', ['sass', 'js'], () => {
  console.log('Fazendo o Build do Projeto')
})
