module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    auhtor: 'El Meño Lindo'
  });

  grunt.registerTask('Hola', 'Mi primera tarea registrada', function() {
    grunt.log.writeln("Hola este es mi primera tarea"+grunt.config('auhtor'));
  });
}
