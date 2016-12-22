module.exports = function(grunt) {
  // Loads each task referenced in the packages.json file
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  var mySecret = false;
  if (grunt.file.exists('secret.json')) {
    mySecret = grunt.file.readJSON('secret.json');
  }


  // Initiate grunt tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    moment: require('moment'),

    // Tasks
    //lesslint: {
    //  src: ['app/assets/less/*.less'],
    //  options: {
    //    csslint: {
    //      'known-properties': false
    //    }
    //  }
    //},
    //less: {
    //  standard: {
    //    options: {
    //    },
    //    files: [{
    //      expand: true,
    //      cwd: 'app/assets/less/',
    //      src: ['*.less'],
    //      dest: 'tmp/css/',
    //      ext: '.css'
    //    }]
    //  }
    //},
    sass: {
      options: {

      },
      dist: {
        files: {
          'tmp/css/<%= pkg.name %>.css': 'app/assets/sass/theme-standard.scss',
          'tmp/css/print.css': 'app/assets/sass/print.scss',
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11', 'edge 13', 'edge 14']
        //diff: 'build/config/*.diff'
      },
      prefix: {
        expand: true,
        //flatten: true,
        cwd: 'tmp/css/',
        src: '*.css',
        dest: 'tmp/css/prefixed/'
      }
    },
    cssmin: {
      main: {
        options: {
          banner: '/*!  HiØ stylesheets v<%= pkg.version %> by <%= pkg.author %>, released: <%= moment().format("HH:mm DD-MM-YYYY") %> */'
        },
        expand: true,
        cwd: 'tmp/css/prefixed/',
        src: ['*.css', '!*.min.css'],
        dest: 'tmp/css/minified',
        ext: '.v<%= pkg.version %>.min.css'
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
      jscomponents: {
        expand: true,
        cwd: 'app/assets/js/components/',
        src: '**',
        dest: 'build/assets/js/components/',
        filter: 'isFile'
      },
      jsmap: {
        expand: true,
        cwd: 'tmp/js/',
        src: 'application.min.map',
        dest: 'build/assets/js/',
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
      },
      tests: {
        expand: true,
        cwd: 'tests',
        src: '**',
        dest: 'build/tests/',
        filter: 'isFile'
      }
    },

    clean: {
      options: {
        force: true
      },
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
      files: ['app/assets/js/**/*.js', 'app/assets/js/**/*.json', 'Gruntfile.js', 'bower.json', 'package.json']
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
    babel: {
      options: {
        sourceMap: true,
        comments: false
        //presets: ['es2015']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'app/assets/js/components/',
            src: ['*.js'],
            filter: 'isFile',
            dest: 'build/js/components/'
          }
        ]
      }
    },
    concat: {
      scripts: {
        options: {
          //sourceMap: true,
          //sourceMapStyle: 'inline'
        },
        src: [
          //'app/vendor/jquery/dist/jquery.js',
          'vendor/jQuery-ajaxTransport-XDomainRequest/jquery.xdomainrequest.min.js',
          'vendor/leaflet/dist/leaflet-src.js',
          'vendor/footable/js/footable.js',
          'vendor/footable/js/footable.paginate.js',
          'vendor/footable/js/footable.filter.js',
          'vendor/footable/js/footable.sort.js',
          'vendor/footable/js/footable.striping.js',
          'vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
          'vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
          'vendor/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
          'vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
          'vendor/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
          'vendor/jquery-cookie/jquery.cookie.js',
          'vendor/pathjs/path.js',
          'vendor/handlebars/handlebars.js',
          'vendor/jquery.scrollTo/jquery.scrollTo.js',
          'vendor/slideout/slideout-navigation.js',
          'vendor/detectjs/detect.min.js',
          'vendor/moment/min/moment-with-locales.js',
          'vendor/moment-duration-format/lib/moment-duration-format.js',
          'app/assets/js/templates/*.js',
          'build/js/components/*.js',
          'app/assets/js/*.js'
        ],
        dest: 'tmp/js/application.min.js'
      }
    },
    uglify: {
      options: {
        mangle: false,
        //compress: true,
        preserveComments: false,
        banner: '/*!  HiØ JavaScript v<%= pkg.version %> by <%= pkg.author %>, released: <%= moment().format("HH:mm DD-MM-YYYY") %>, license: <%= pkg.license %>  */',
        //sourceMap: true,
        //sourceMapIncludeSources: true,
        //sourceMapIn: 'tmp/js/application.min.js.map', // input sourcemap from a previous compilation
      },
      main: {
        files: {
          'tmp/js/application.v<%= pkg.version %>.min.js': ['tmp/js/application.min.js']
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
            src: ['tmp/js/application.v<%= pkg.version %>.min.js'],
            dest: 'tmp/js/application.v<%= pkg.version %>.min.js'
          }],
          key: 'assets',
          dest: 'js',
          type: 'js',
          ext: '.min.js'
        },

        {
          assets: [{
            src: 'tmp/css/minified/<%= pkg.name %>.v<%= pkg.version %>.min.css',
            dest: 'tmp/css/minified/<%= pkg.name %>.v<%= pkg.version %>.min.css'
          }, {
            src: 'tmp/css/minified/print.v<%= pkg.version %>.min.css',
            dest: 'tmp/css/minified/print.v<%= pkg.version %>.min.css'
          }],
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
          src: ['tmp/js/application.v<%= pkg.version %>.min.js'],
          dest: 'tmp/js/application.v<%= pkg.version %>.min.js'
        }],
        key: 'assets',
        dest: 'js',
        type: 'js',
        ext: '.min.js'
      },

      {
        assets: [{
          src: 'tmp/css/minified/<%= pkg.name %>.v<%= pkg.version %>.min.css',
          dest: 'tmp/css/minified/<%= pkg.name %>.v<%= pkg.version %>.min.css'
        }, {
          src: 'tmp/css/minified/print.v<%= pkg.version %>.min.css',
          dest: 'tmp/css/minified/print.v<%= pkg.version %>.min.css'
        }],
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
        src: ['tmp/js/application.v<%= pkg.version %>.min.js'],
        dest: 'tmp/js/application.v<%= pkg.version %>.min.js'
      }],
      key: 'assets',
      dest: 'js',
      type: 'js',
      ext: '.min.js'
    },

    {
      assets: [{
        src: 'tmp/css/minified/<%= pkg.name %>.v<%= pkg.version %>.min.css',
        dest: 'tmp/css/minified/<%= pkg.name %>.v<%= pkg.version %>.min.css'
      }, {
        src: 'tmp/css/minified/print.v<%= pkg.version %>.min.css',
        dest: 'tmp/css/minified/print.v<%= pkg.version %>.min.css'
      }],
      key: 'assets',
      dest: 'css',
      type: 'css',
      ext: '.min.css'
    }
  ]
}

},
secret: mySecret,
sftp: {
  stage: {
    files: {
      "./": "deploy/assets/**"
    },
    options: {
      path: '<%= secret.prod.path %>',
      srcBasePath: "deploy/assets/",
      host: '<%= secret.stage.host %>',
      username: '<%= secret.stage.username %>',
      password: '<%= secret.stage.password %>',
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
      path: '<%= secret.prod.path %>',
      srcBasePath: "deploy/assets/",
      host: '<%= secret.prod.host %>',
      username: '<%= secret.prod.username %>',
      password: '<%= secret.prod.password %>',
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
    }
  }
},
express: {
  all: {
    options: {
      port: 9000,
      hostname: "0.0.0.0",
      bases: 'build',
      livereload: true
    }
  }
},

open: {
  all: {
    path: 'http://localhost:<%= express.all.options.port%>'
  }
},

qunit: {
  all: {
    options: {
      urls: [
        'http://localhost:9000/tests/qunit/index.html',
      ]
    }
  }
},

watch: {
  all: {
    files: ['app/assets/**/*'],
    tasks: ['deploy-staging'],
    options: {
      //livereload: true,
    },
  }
},
bump: {
  options: {
    files: ['package.json'],
    updateConfigs: [],
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['-a'],
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: false,
    pushTo: 'upstream',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: false,
    prereleaseName: 'beta',
    regExp: false
  }
}
});

// ----------------------------------------------------------
// Tasks

// Register tasks
grunt.registerTask('subtaskJs', ['babel', 'concat:scripts', 'uglify', 'copy:jscomponents', 'copy:jsmap', 'copy:jsdata', 'copy:jstemplates']);
grunt.registerTask('subtaskCss', ['sass', 'autoprefixer', 'cssmin']);
grunt.registerTask('subtaskCopy', ['copy:images', 'copy:fonts', 'copy:vendor', 'copy:favicon', 'copy:tests']);
grunt.registerTask('subtaskCopyDeploy', ['copy:images', 'copy:vendor', 'copy:favicon']);
//grunt.registerTask('subtaskViews', ['concat:pages']);
grunt.registerTask('build', ['clean:build', 'subtaskCss', 'subtaskJs', 'versioning:build', 'subtaskCopy']);


// Deploy tasks
grunt.registerTask('deploy-staging', [
  'clean:build',
  'subtaskCss',
  'subtaskJs',
  'versioning:deploy',
  'subtaskCopyDeploy',
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
grunt.registerTask('test', [
  'build',
  'express',
  'qunit'
]);

// Bump tasks
grunt.registerTask('major', ['bump:major']);
grunt.registerTask('minor', ['bump:minor']);
grunt.registerTask('patch', ['bump:patch']);
grunt.registerTask('beta', ['bump:prerelease']);


};
