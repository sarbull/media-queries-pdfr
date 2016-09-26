(function(){
  "use strict";

  module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    name: '<%= pkg.name %>',
    banner: '/*\n * <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n */\n',
    less: {
      development: {
        options: {},
        files: {
          'dist/css/<%= pkg.name %>.css': 'src/modules.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'src/modules.less'
        }
      },
    },
    watch: {
      scripts: {
        files: ['src/**/*.*', 'dist/**/*.*'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'less'
  ]);

};
})();
