module.exports = function(grunt) {
  // Loads each task referenced in the packages.json file
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  // Initiate grunt tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Tasks
    
    less: {
      standard: {
        options: {

        },
        files: [{
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
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
        //diff: 'build/config/*.diff'
      },
      prefix: {
        expand: true,
        //flatten: true,
        src: 'tmp/css/*.css'
        //dest: 'tmp/css/prefixed/'
      }
    },
    cssmin: {
      main: {
        options: {
          banner: '/*!  HiØ stylesheets v<%= pkg.version %> by Kenneth Dahlstrøm<kenneth.dahlstrom@hiof.no> */'
        },
        expand: true,
        cwd: 'tmp/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'tmp/css/',
        ext: '.min.css'
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
      },
      deploy: {
        expand: true,
        cwd: 'build/',
        src: '**',
        dest: 'deploy',
        filter: 'isFile'
      },
      jsdata: {
        expand: true,
        cwd: 'app/assets/js/data/',
        src: '**',
        dest: 'build/assets/js/data/',
        filter: 'isFile'
      },
      jstemplates: {
        expand: true,
        cwd: 'app/assets/js/templates/',
        src: '**',
        dest: 'build/assets/js/templates/',
        filter: 'isFile'
      },
      favicon: {
        expand: true,
        cwd: 'app/assets/images/app-icons',
        src: 'favicon.ico',
        dest: 'build/',
        filter: 'isFile'
      }
    },

    clean: {
      before: ['build/assets', 'build/css', 'build/js', 'build/config'],
      after: ['tmp/**/*'],
      dist: ['dist/**/*'],
      deploy: ['deploy/**/*'],
      build: ['build/**/*']
    },
    jshint: {
      options: {
        ignores: ['app/assets/js/templates/templates.js']
      },
      files: ['app/assets/js/**/*.js', 'Gruntfile.js', 'bower.json', 'package.json']
    },
    handlebars: {
        options: {
            namespace: 'Hiof.Templates',
            processName: function(filePath) {
              return filePath.replace(/^app\/templates\//, '').replace(/\.hbs$/, '');
            }
        },
        all: {
            files: {
                "app/assets/js/templates/templates.js": ["app/templates/**/*.hbs"]
            }
        }
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
          'build/index2.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/index2.html',
            'app/views/partials/_footer.html'
          ],
          'build/typography-kitchen-sink.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/content-kitchen-sink.html',
            'app/views/partials/_footer.html'
          ],
          'build/form-index.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/form-control-index.html',
            'app/views/partials/_footer.html'
          ],
          'build/form-buttons.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/form-control-buttons.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-section-person-search.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/person-search.html',
            'app/views/partials/_activate_design_page.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-section-person-profile-jo.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/person-profile-jo.html',
            'app/views/partials/_activate_design_page.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-section-person-profile-nina.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/person-profile-nina.html',
            'app/views/partials/_activate_design_page.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-section-person-profile-baard.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/person-profile-baard.html',
            'app/views/partials/_activate_design_page.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-section-calendar.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/calendar-entries.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-section-calendar-event.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/calendar-event.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-contact-web-responsible.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/contact-web-responsible.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-contact.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/contact-general.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-privacy-policy.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/privacy-policy.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-table.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/table.html',
            'app/views/partials/_footer.html'
          ],
          'build/content-it-help.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/content-it-help.html',
            'app/views/partials/_footer.html'
          ],
          'build/article-research.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/articles/research.html',
            'app/views/pages/articles/article-sidebar.html',
            'app/views/pages/articles/article-footer.html',
            'app/views/partials/_footer.html'
          ],
          'build/article-single.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/articles/article-single.html',
            'app/views/pages/articles/article-sidebar.html',
            'app/views/pages/articles/article-footer.html',
            'app/views/partials/_footer.html'
          ],
          'build/article-chronicle.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/articles/chronicle.html',
            'app/views/pages/articles/article-sidebar.html',
            'app/views/pages/articles/article-footer.html',
            'app/views/partials/_footer.html'
          ],
          'build/article-list.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/articles/article-list.html',
            'app/views/pages/articles/article-sidebar.html',
            'app/views/partials/_footer.html'
          ],
          'build/article-archive.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/articles/article-archive.html',
            'app/views/pages/articles/article-sidebar.html',
            'app/views/partials/_footer.html'
          ],
          'build/studier-index.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/study-programs.html',
            'app/views/pages/content/study-programs-sidebar-start.html',
            'app/views/pages/content/study-programs-sidebar-search.html',
            'app/views/pages/content/study-programs-sidebar-end.html',
            'app/views/partials/_footer.html'
          ],
          'build/studier-dataingenior.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/study-program-ingenior-computer.html',
            'app/views/pages/content/study-programs-sidebar-start.html',
            'app/views/pages/content/study-programs-sidebar-page-nav.html',
            'app/views/pages/content/study-programs-sidebar-end.html',
            'app/views/partials/_footer.html'
          ],
          'build/studier-dataingenior-studymodel.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/study-program-ingenior-computer-studymodel.html',
            'app/views/pages/content/study-programs-sidebar-start.html',
            'app/views/pages/content/study-programs-sidebar-page-nav.html',
            'app/views/pages/content/study-programs-sidebar-end.html',
            'app/views/partials/_footer.html'
          ],
          'build/universiell-utforming.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/universal-access.html',
            'app/views/partials/_footer.html'
          ],
          'build/student.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/intranet-student.html',
            'app/views/partials/_footer.html'
          ],
          'build/student-fronter.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/intranet-student-fronter.html',
            'app/views/partials/_footer.html'
          ],
          'build/ansatt.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/intranet-employee.html',
            'app/views/partials/_footer.html'
          ],
          'build/map.html': [
            'app/views/partials/_head.html',
            'app/views/partials/_header.html',
            'app/views/pages/content/map.html',
            'app/views/partials/_footer.html'
          ]
        }
      },
      scripts: {
        src: [
          //'app/vendor/60fps-scroll/dist/60fps-scroll.js', 
          'app/vendor/footable/js/footable.js', 
          'app/vendor/footable/js/footable.paginate.js', 
          'app/vendor/footable/js/footable.filter.js', 
          'app/vendor/footable/js/footable.sort.js', 
          'app/vendor/footable/js/footable.striping.js',
          'app/vendor/bootstrap/js/modal.js',
          'app/vendor/bootstrap/js/dropdown.js', 
          'app/vendor/jquery-cookie/jquery.cookie.js',
          'app/vendor/pathjs/path.js',
          'app/vendor/handlebars/handlebars.js',
          'app/assets/js/templates/*.js', 
          'app/assets/js/components/*.js', 
          'app/assets/js/*.js', 
          'app/vendor/jquery.scrollTo/jquery.scrollTo.js', 
          'app/vendor/slideout/slideout-navigation.js'
        ],
        dest: 'tmp/js/application.min.js'
      }
    },
    uglify: {
      options: {
        mangle: false,
        //compress: true,
        preserveComments: false,
        banner: '/*!  HiØ JavaScript v<%= pkg.version %> by Kenneth Dahlstrøm<kenneth.dahlstrom@hiof.no> */'
      },
      main: {
        files: {
          'tmp/js/application.min.js': ['tmp/js/application.min.js']
        }
      }
    },
    versioning: {
      options: {
        cwd: 'build/assets',
        outputConfigDir: 'build/config',
        namespace: 'hiof'
      },
      build: {
        files: [{
            assets: [{
              src: ['tmp/js/application.min.js'],
              dest: 'tmp/js/application.min.js'
            }],
            key: 'assets',
            dest: 'js',
            type: 'js',
            ext: '.min.js'
          },

          {
            assets: [{
              src: 'tmp/css/theme-standard.min.css',
              dest: 'tmp/css/theme-standard.css'
            }, 
            {
             src: 'tmp/css/theme-standard-canvas.min.css',
             dest: 'tmp/css/theme-standard-canvas.css'
            },
            {
              src: 'tmp/css/print.min.css',
              dest: 'tmp/css/print.css'
            }],
            // {
            // src: 'tmp/css/theme-verdana.min.css',
            // dest: 'tmp/css/theme-verdana.css'
            //, {
            // src: 'tmp/css/theme-source-pro.min.css',
            // dest: 'tmp/css/theme-source-pro.css'
            //],
            key: 'assets',
            dest: 'css',
            type: 'css',
            ext: '.min.css'
          }
        ]
      },
      dist: {
        options: {
          //output: 'php'
        },
        files: [{
            assets: [{
              src: ['tmp/js/application.min.js'],
              dest: 'tmp/js/application.min.js'
            }],
            key: 'assets',
            dest: 'js',
            type: 'js',
            ext: '.min.js'
          },

          {
            assets: [{
              src: 'tmp/css/theme-standard.min.css',
              dest: 'tmp/css/theme-standard.css'
            }, 
            {
             src: 'tmp/css/theme-standard-canvas.min.css',
             dest: 'tmp/css/theme-standard-canvas.css'
            },
            {
              src: 'tmp/css/print.min.css',
              dest: 'tmp/css/print.css'
            }], 
            //{
            //  src: 'tmp/css/theme-helvetica.min.css',
            //  dest: 'tmp/css/theme-helvetica.css'
            //}, {
            //  src: 'tmp/css/theme-verdana.min.css',
            //  dest: 'tmp/css/theme-verdana.css'
            //}, {
            //  src: 'tmp/css/theme-source-pro.min.css',
            //  dest: 'tmp/css/theme-source-pro.css'
            //}],
            key: 'assets',
            dest: 'css',
            type: 'css',
            ext: '.min.css'
          }
        ]
      },
      deploy: {
        options: {
          output: 'php',
          outputConfigDir: 'build/assets',
        },
        files: [{
            assets: [{
              src: ['tmp/js/application.min.js'],
              dest: 'tmp/js/application.min.js'
            }],
            key: 'assets',
            dest: 'js',
            type: 'js',
            ext: '.min.js'
          },

          {
            assets: [{
              src: 'tmp/css/theme-standard.min.css',
              dest: 'tmp/css/theme-standard.css'
            }, 
            {
             src: 'tmp/css/theme-standard-canvas.min.css',
             dest: 'tmp/css/theme-standard-canvas.css'
            },
            {
              src: 'tmp/css/print.min.css',
              dest: 'tmp/css/print.css'
            }], 
            //{
            //  src: 'tmp/css/theme-helvetica.min.css',
            //  dest: 'tmp/css/theme-helvetica.css'
            //}, {
            //  src: 'tmp/css/theme-verdana.min.css',
            //  dest: 'tmp/css/theme-verdana.css'
            //}, {
            //  src: 'tmp/css/theme-source-pro.min.css',
            //  dest: 'tmp/css/theme-source-pro.css'
            //}],
            key: 'assets',
            dest: 'css',
            type: 'css',
            ext: '.min.css'
          }
        ]
      }

    },
    secret: grunt.file.readJSON('secret.json'),
    //sshconfig: {
    //},
    sftp: {
      stage: {
        files: {
           "./": "deploy/assets/**"
        },
        options: {
          path: '/neted/sites/www.hiof.no/public/assets/',
          srcBasePath: "deploy/assets/",
          host: '<%= secret.stage.host %>',
          username: '<%= secret.stage.username %>',
          password: '<%= secret.stage.password %>',
          //privateKey: grunt.file.read('id_rsa'),
          //passphrase: '<%= secret.passphrase %>',
          showProgress: true,
          createDirectories: true,
          directoryPermissions: parseInt(755, 8)
        }        
      },
      prod: {
        files: {
           "./": "deploy/assets/**"
        },
        options: {
          path: '/neted/sites/www.hiof.no/public/assets/',
          srcBasePath: "deploy/assets/",
          host: '<%= secret.prod.host %>',
          username: '<%= secret.prod.username %>',
          password: '<%= secret.prod.password %>',
          //privateKey: grunt.file.read('id_rsa'),
          //passphrase: '<%= secret.passphrase %>',
          showProgress: true,
          createDirectories: true,
          directoryPermissions: parseInt(755, 8)
        }
      }
    },
    sshexec: {
      test: {
        command: 'uptime',
        options: {
          host: '<%= secret.host %>',
          username: '<%= secret.username %>',
          password: '<%= secret.password %>'
          //privateKey: grunt.file.read('id_rsa'),
          //passphrase: '<%= secret.passphrase %>',
        }
      }
    },
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: 'build',
          // Replace with the directory you want the files served from
          // Make sure you don't use `.` or `..` in the path as Express
          // is likely to return 403 Forbidden responses if you do
          // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
          livereload: true
        }
      }
    },
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },



    watch: {
      hbs: {
        files: ['app/templates/**/*.hbs'],
        tasks: ['handlebars','copy:jstemplates'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ['app/assets/js/**/*.js', 'app/assets/js/**/*.json'],
        tasks: ['jshint', 'concat:scripts', 'versioning:build', 'copy:jsdata'],
        options: {
          livereload: true,
        },
      },
      css: {
        files: ['app/assets/less/**/*.less'],
        tasks: ['less', 'autoprefixer', 'cssmin', 'versioning:build'],
        options: {
          livereload: true,
        },
      },
      views: {
        files: ['app/views/**/*.html'],
        tasks: ['concat:pages'],
        options: {
          livereload: true,
        },
      },
      images:{
        files: ['app/assets/images/**/*.jpg', 'app/assets/images/**/*.png', 'app/assets/images/**/*.svg'],
        tasks: ['copy:images'],
        options: {
          livereload: true,
        },
      },

      favicon:{
        files: ['app/assets/images/**/*.ico'],
        tasks: ['copy:favicon'],
        options: {
          livereload: true,
        },
      },

      fonts:{
        files: ['app/assets/fonts/**/*'],
        tasks: ['copy:fonts'],
        options: {
          livereload: true,
        },
      }
    }

  });

  // ----------------------------------------------------------
  // Tasks

  // Register tasks
  grunt.registerTask('subtaskJs', ['jshint', 'concat:scripts', 'uglify', 'copy:jsdata', 'copy:jstemplates']);
  grunt.registerTask('subtaskCss', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('subtaskCopy', ['copy:images', 'copy:fonts', 'copy:vendor', 'copy:favicon']);
  grunt.registerTask('subtaskCopyDeploy', ['copy:images', 'copy:vendor', 'copy:favicon']);
  grunt.registerTask('subtaskViews', ['concat:pages']);
  grunt.registerTask('build', ['clean:build', 'subtaskCss', 'subtaskJs', 'versioning:build', 'subtaskCopy', 'subtaskViews']);



  // grunt.registerTask('dist', ['clean:build', 'subtaskCss', 'subtaskJs', 'versioning:dist', 'subtaskCopy', 'subtaskViews', 'clean:dist', 'copy:dist']);



  // Deploy tasks
  grunt.registerTask('deploy-stage', [
                                        'clean:build', 
                                        'subtaskCss', 
                                        'subtaskJs', 
                                        'versioning:deploy', 
                                        'subtaskCopyDeploy', 
                                        'subtaskViews', 
                                        'clean:deploy', 
                                        'copy:deploy', 
                                        'sftp:stage'
                                      ]);

  grunt.registerTask('deploy-prod', [
                                      'clean:build', 
                                      'subtaskCss', 
                                      'subtaskJs', 
                                      'versioning:deploy', 
                                      'subtaskCopyDeploy', 
                                      'subtaskViews', 
                                      'clean:deploy', 
                                      'copy:deploy', 
                                      'sftp:prod'
                                    ]);


  // Server tasks
  grunt.registerTask('server', [
                                'build',
                                'express',
                                'open',
                                'watch'
                              ]);


};
