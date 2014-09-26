module.exports = function(grunt) {

  grunt.initConfig({
    
    php: {
        wordpress: {
            options: {
                keepalive: true,
                open: true,
                router: 'router.php'
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-php');
  grunt.registerTask('default', ['php']);

};
