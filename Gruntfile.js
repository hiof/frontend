module.exports = function(grunt) {

  grunt.initConfig({
    // Tasks
    compass: {
      dev: {
        options: {
          config: 'config/config.rb',
          sassDir: 'assets/sass',
          cssDir: 'tmp/css/'
        }
      }
    },

    cssmin: {
      main: {
        options: {
          banner: '/* HiØ styling by Kenneth Dahlstrøm<kenneth.dahlstrom@hiof.no> */'
        },
        files: [{
          src: ['tmp/css/application.css'],
          dest: 'tmp/css/application.min.css'
        }]
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'build/css/',
        src: 'tmp/css/*',
        dest: 'build/',
        filter: 'isFile'
      },
    },

    versioning: {
      options: {
        cwd: 'build',
        outputConfigDir: 'build/config'
      },
      dist: {
        files: [{
          assets: '<%= cssmin.main.files %>',
          key: 'global',
          dest: 'css',
          type: 'css',
          ext: '.min.css'
        }]
      }
    },

    clean: {
      before: ['build/css'],
      after: ["tmp/css"]
    },


    watch: {
      css: {
        files: ['assets/sass/**/*.sass'],
        tasks: ['clean:before', 'compass', 'cssmin', 'versioning', 'clean:after']
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-static-versioning');

  // Register tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('prod', ['clean:before', 'compass', 'cssmin', 'versioning', 'clean:after']);
};
