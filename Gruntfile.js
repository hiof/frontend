module.exports = function(grunt) {

  grunt.initConfig({
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
          banner: '/* HiØ styling by Kenneth Dahlstrøm<kenneth.dahlstrom@hiof.no> */'
        },
        files: [{
          src: ['tmp/css/prefixed/*.css', '!{print,var,mix}*.css'],
          dest: 'tmp/application.css'
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
        cwd: 'app/assets/fonts/',
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
            'app/views/partials/_header.html',
            'app/views/pages/index.html',
            'app/views/partials/_footer.html'
          ]
          //'build/content.html': [
          //  'app/views/partials/_header.html',
          //  'app/views/pages/content.html',
          //  'app/views/partials/_footer.html'
          //]          
        }
      },
      //plugins: {
      //  files: {
      //    'tmp/js/neted-common.js': [
      //      'app/assets/coffeescripts/plugins/neted/neted-common.js'
      //    ],
      //    'tmp/js/neted.js': [
      //      'app/assets/coffeescripts/plugins/neted/neted-AC_RunActiveContent.js',
      //      'app/assets/coffeescripts/plugins/neted/neted-changeSelect.js',
      //      'app/assets/coffeescripts/plugins/neted/neted-neted.js',
      //      'app/assets/coffeescripts/plugins/neted/neted-util.js'
      //    ],
      //    'tmp/js/symbolset.js': [
      //      'app/assets/coffeescripts/plugins/symbolset/ss-social/ss-social.js',
      //      'app/assets/coffeescripts/plugins/symbolset/ss-standard/ss-standard.js',
      //      'app/assets/coffeescripts/plugins/symbolset/ss-symbolicons-block/ss-symbolicons-block.js'
      //    ],
      //    'build/assets/js/plugin/tabpane.js': [
      //      'app/assets/coffeescripts/plugins/neted/tabpane.js'
      //    ],
      //    'build/assets/js/plugin/jquery.js': [
      //      'vendor/jquery/jquery.js'
      //    ]
      //  }
      //},
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
            assets: '<%= cssmin.main.files %>',
            key: 'global',
            dest: 'css',
            type: 'css',
            ext: '.min.css'
          }
        ]
      }

    },
    watch: {
      //js: {
      //  files: ['app/assets/coffeescripts/**/*', 'vendor/**/*'],
      //  tasks: ['coffee', 'concat:plugins', 'concat:scripts', 'uglify', 'versioning']
      //},
      css: {
        files: ['app/assets/sass/**/*.sass', 'app/assets/sass/**/*.scss'],
        tasks: ['less', 'autoprefixer', 'cssmin', 'versioning', 'copy:images']
      },
      views: {
        files: ['app/views/**/*.html'],
        tasks: ['concat:pages']
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-static-versioning');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Register tasks
  grunt.registerTask('dev', ['watch']);

  grunt.registerTask('prod', ['clean:before', 'less', 'autoprefixer', 'cssmin', 'concat:scripts', 'uglify', 'versioning', 'copy', 'concat:pages', 'clean:after']);
};
