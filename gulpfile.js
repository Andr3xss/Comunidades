// gulpfile.js

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

// Tarea de construcción
gulp.task('build', function () {
  return gulp.src('./views/*.ejs')  // Ruta de los archivos de entrada (puedes ajustarla según tu estructura)
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./public'));  // Ruta de la carpeta de salida (puedes ajustarla según tu estructura)
});

// Otras tareas pueden ir aquí...

// Tarea por defecto
gulp.task('default', gulp.series('build'));