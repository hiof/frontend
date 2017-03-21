module.exports = function(grunt) {

  grunt.initConfig({
    // Tasks
    coffee: {
      compile: {
        files: {
          'tmp/js/app.js': ['assets/coffeescripts/app.coffee'] // compile and concat into single file
        }
      },
    },
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



    clean: {
      before: ['build/assets', 'build/css', 'build/js', 'build/config'],
      after: ["tmp/css", 'tmp/images']
    },

    concat: {
      pages: {
        files: {
          'build/index.html': [
            'views/partials/_header.html',
            'views/pages/index.html',
            'views/partials/_footer.html'
          ],
          'build/studier-ingenior.html': [
            'views/partials/_header.html',
            'views/pages/studier_ingenior.html',
            'views/partials/_footer.html'
          ],
          'build/studentrad.html': [
            'views/partials/_header.html',
            'views/pages/studentradet_ir.html',
            'views/partials/_footer.html'
          ],
          'build/studier.html': [
            'views/partials/_header.html',
            'views/pages/studier.html',
            'views/partials/_footer.html'
          ]
        }
      },
      plugins: {
        files: {
          'tmp/js/neted-common.js': [
            'assets/coffeescripts/plugins/neted/neted-common.js'
          ],
          'tmp/js/neted.js': [
            'assets/coffeescripts/plugins/neted/neted-AC_RunActiveContent.js',
            'assets/coffeescripts/plugins/neted/neted-changeSelect.js',
            'assets/coffeescripts/plugins/neted/neted-neted.js',
            'assets/coffeescripts/plugins/neted/neted-util.js'
          ],

          'tmp/js/symbolset.js': [
            'assets/coffeescripts/plugins/symbolset/ss-social/ss-social.js',
            'assets/coffeescripts/plugins/symbolset/ss-standard/ss-standard.js',
            'assets/coffeescripts/plugins/symbolset/ss-symbolicons-block/ss-symbolicons-block.js'
          ],
          'build/assets/js/plugin/tabpane.js': [
            'assets/coffeescripts/plugins/neted/tabpane.js'
          ],
          'build/assets/js/plugin/jquery.js': [
            'vendor/jquery/jquery.js'
          ]
        }
      },
      scripts: {
        files: {
          'tmp/js/application.js': [
            'vendor/modernizr/modernizr.js',
            'tmp/js/neted-common.js',
            'vendor/jquery/jquery.js',
            'tmp/js/neted.js',
            //'tmp/js/symbolset.js',
            'assets/coffeescripts/plugins/select2.js',
            'assets/coffeescripts/plugins/waypoints.min.js',
            'tmp/js/app.js'
          ]
        }
      }
    },

    uglify: {
      main: {
        files: {
          'tmp/js/application.min.js': ['tmp/js/application.js']
        }
      }
    },

    versioning: {
      options: {
        cwd: 'build/assets',
        outputConfigDir: 'build/config'
      },
      dist: {
        files: [{
          assets: [{
            src: ['tmp/js/application.min.js'],
            dest: 'tmp/js/application.min.js'
          }],
          key: 'global',
          dest: 'js',
          type: 'js',
          ext: '.min.js'
        }, {
          assets: '<%= cssmin.main.files %>',
          key: 'global',
          dest: 'css',
          type: 'css',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      js: {
        files: ['assets/coffeescripts/**/*', 'vendor/**/*'],
        tasks: ['coffee', 'concat:plugins', 'concat:scripts', 'uglify', 'versioning']
      },
      css: {
        files: ['assets/sass/**/*.sass', 'assets/sass/**/*.scss'],
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
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Register tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('prod', ['clean:before', 'coffee', 'concat:plugins', 'concat:scripts', 'uglify', 'compass', 'cssmin', 'versioning', 'copy', 'concat:pages', 'clean:after']);
};
