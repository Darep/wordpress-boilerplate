module.exports = function(grunt) {

  grunt.initConfig({
    
    php: {
        wordpress: {
            options: {
                keepalive: true,
                open: true
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-php');
  grunt.registerTask('default', ['php']);

};
