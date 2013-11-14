module.exports = function(grunt){

  // Project configuration
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json')
  , jade : {
      compile : {
        options : {
          pretty : true
        }
      , files : {
          'index.html' : 'src/index.jade'
        }
      }
    }
  , watch : {
      jade : {
        files : [ 'src/**/*.jade' ]
      , tasks : [ 'jade' ]
      , options : {
          interrupt : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'stylus']);

}