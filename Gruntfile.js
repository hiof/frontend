module.exports = function(grunt) {

  grunt.initConfig({
    // Tasks
    compass: {
      dev: {
        options: {
          config: 'config/config.rb',
          sassDir: 'assets/sass',
          cssDir: 'tmp/'
        }
      }
    },

    cssmin: {
      main: {
        options: {
          banner: '/* HiØ styling by Kenneth Dahlstrøm<kenneth.dahlstrom@hiof.no> */'
        },
        files: [{
          src: ['tmp/application.css'],
          dest: 'tmp/application.min.css'
        }]
      }
    },
    copy: {
      images: {
        expand: true,
        cwd: 'tmp/',
        src: 'images/*',
        dest: 'build/assets/',
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        cwd: 'assets/fonts/',
        src: '**',
        dest: 'build/assets/',
        filter: 'isFile'
      }
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
          dest: 'assets',
          type: 'css',
          ext: '.min.css'
        }]
      }
    },

    clean: {
      before: ['build/css', 'build/images'],
      after: ["tmp/css", 'tmp/images']
    },

    concat:{
      pages: {
        files:{
          'build/index.html': ['views/partials/_header.html', 'views/pages/index.html', 'views/partials/_footer.html'],
          'build/studier-ingenior.html': ['views/partials/_header.html', 'views/pages/studier_ingeior_data.html', 'views/partials/_footer.html']
        }
      }
    },

    watch: {
      css: {
        files: ['assets/sass/**/*.sass'],
        tasks: ['compass', 'cssmin', 'versioning', 'copy:images']
      },
      views: {
        files: ['views/**/*.html'],
        tasks: ['concat:pages']
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
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('prod', ['clean:before', 'compass', 'cssmin', 'versioning', 'copy', 'concat:pages', 'clean:after']);
};
