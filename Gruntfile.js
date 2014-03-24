module.exports = function(grunt) {
  // Loads each task referenced in the packages.json file
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


  // Initiate grunt tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Tasks

    less: {
      standard: {
        options: {

        },
        files: [{
          //"tmp/css/*.css": "app/assets/less/*.less"
          expand: true,
          cwd: 'app/assets/less/',
          src: ['*.less'],
          dest: 'tmp/css/',
          ext: '.css'


        }]
      }
    },
    autoprefixer: {
      options: {

      },
      prefix: {
        expand: true,
        flatten: true,
        src: 'tmp/css/*.css',
        dest: 'tmp/css/prefixed/'
      }

    },
    cssmin: {
      main: {
        options: {
          banner: '/*!  HiØ stylesheets v<%= pkg.version %> by Kenneth Dahlstrøm<kenneth.dahlstrom@hiof.no> */'
        },
        standard: [{
          src: ['tmp/css/prefixed/theme-standard.css', '!{print,var,mix}*.css'],
          dest: 'tmp/theme-standard.css'
        }],
        helvetica: [{
          src: ['tmp/css/prefixed/theme-helvetica.css', '!{print,var,mix}*.css'],
          dest: 'tmp/theme-helvetica.css'
        }],
        verdana: [{
          src: ['tmp/css/prefixed/theme-verdana.css', '!{print,var,mix}*.css'],
          dest: 'tmp/theme-verdana.css'
        }]
      }
    },
    copy: {
      images: {
        expand: true,
        cwd: 'app/assets/images/',
        src: '**',
        dest: 'build/assets/images/',
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        cwd: 'app/assets/fonts/',
        src: '**',
        dest: 'build/assets/fonts/',
        filter: 'isFile'
      },
      vendor: {
        expand: true,
        cwd: 'app/vendor/',
        src: '**',
        dest: 'build/vendor',
        filter: 'isFile'
      },
      dist: {
        expand: true,
        cwd: 'build/',
        src: '**',
        dest: 'dist',
        filter: 'isFile'
      }
    },



    clean: {
      before: ['build/assets', 'build/css', 'build/js', 'build/config'],
      after: ["tmp/css", 'tmp/images'],
      dist: ['dist/**/*']
    },
    jshint: {
      files: ['app/assets/js/**/*.js']
    },

    concat: {
      pages: {
        files: {
          'build/index.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/index.html',
            'app/views/partials/_footer.html'
          ],
          'build/typography-index.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/typography/index.html',
            'app/views/partials/_footer.html'
          ],
          'build/typography-kitchen-sink.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/typography/kitchen-sink.html',
            'app/views/partials/_footer.html'
          ],
          'build/typography-3.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/typography/typography-exploration-helvetica.html',
            'app/views/partials/_footer.html'
          ],
          'build/typography-1.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/typography/typography-exploration-varela.html',
            'app/views/partials/_footer.html'
          ],
          'build/typography-2.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/typography/typography-exploration-verdana.html',
            'app/views/partials/_footer.html'
          ],
          'build/form-index.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/form-control/index.html',
            'app/views/partials/_footer.html'
          ],
          'build/form-buttons.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/form-control/buttons.html',
            'app/views/partials/_footer.html'
          ]
        }
      },
      scripts: {
        files: {
          'tmp/js/application.js': [
            'app/assets/js/components/navigation.js'
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
          },

          {
            assets: [{
              src: '<%= cssmin.main.standard %>',
              dest: 'tmp/css/theme-standard.css'
            }, {
              src: '<%= cssmin.main.helvetica %>',
              dest: 'tmp/css/theme-helvetica.css'
            }, {
              src: '<%= cssmin.main.verdana %>',
              dest: 'tmp/css/theme-verdana.css'
            }],
            key: 'global',
            dest: 'css',
            type: 'css',
            ext: '.min.css'
          }
        ]
      }

    },
    connect: {
      server: {
        options: {
          port: 9666,
          base: 'build/'
        }
      }
    },

    watch: {
      js: {
        files: ['app/assets/js/**/*.js', 'app/assets/js/**/*.js'],
        tasks: ['jshint', 'concat:scripts', 'uglify', 'versioning']
      },
      css: {
        files: ['app/assets/less/**/*.less', 'app/assets/less/**/*.less'],
        tasks: ['less', 'autoprefixer', 'cssmin', 'versioning', 'copy:images'],
        options: {
          livereload: 9666,
        },
      },
      views: {
        files: ['app/views/**/*.html'],
        tasks: ['concat:pages']
      }
    }

  });



  // Register tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('prod', ['clean:before', 'less', 'autoprefixer', 'cssmin', 'concat:scripts', 'uglify', 'versioning', 'copy', 'concat:pages', 'clean:after']);

  grunt.registerTask('dist', ['clean:dist', 'copy:dist']);
};
