module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    auhtor: 'El Meño Lindo'
    uglify:{
      dist:{
        files:{
          'buil/<%= pkg.name %>.main.js':[
            'src/js/main.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTask('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}
