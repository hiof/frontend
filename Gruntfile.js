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
        lesslint: {
            src: ['app/assets/less/*.less'],
            options: {
                csslint: {
                    'known-properties': false
                }
            }
        },
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
                    ],
                    'build/jobs-list-en.html': [
                        'app/views/partials/_head.html',
                        'app/views/partials/_header.html',
                        'app/views/pages/content/jobs-list-en.html',
                        'app/views/partials/_footer.html'
                    ],
                    'build/jobs-list.html': [
                        'app/views/partials/_head.html',
                        'app/views/partials/_header.html',
                        'app/views/pages/content/jobs-list.html',
                        'app/views/partials/_footer.html'
                    ],
                    'build/semester-start.html': [
                        'app/views/partials/_head.html',
                        'app/views/partials/_header.html',
                        'app/views/pages/content/semester-start.html',
                        'app/views/partials/_footer.html'
                    ],
                    'build/itservices.html': [
                        'app/views/partials/_head.html',
                        'app/views/partials/_header.html',
                        'app/views/pages/content/itservices.html',
                        'app/views/partials/_footer.html'
                    ]
                }
            },
            scripts: {
                options: {
                    //sourceMap: true,
                    //sourceMapStyle: 'inline'
                },
                src: [
                    //'app/vendor/jquery/dist/jquery.js',
                    'app/vendor/jQuery-ajaxTransport-XDomainRequest/jquery.xdomainrequest.min.js',
                    'app/vendor/leaflet/dist/leaflet-src.js',
                    'app/vendor/footable/js/footable.js',
                    'app/vendor/footable/js/footable.paginate.js',
                    'app/vendor/footable/js/footable.filter.js',
                    'app/vendor/footable/js/footable.sort.js',
                    'app/vendor/footable/js/footable.striping.js',
                    'app/vendor/bootstrap/js/modal.js',
                    'app/vendor/bootstrap/js/dropdown.js',
                    'app/vendor/bootstrap/js/tooltip.js',
                    'app/vendor/jquery-cookie/jquery.cookie.js',
                    'app/vendor/pathjs/path.js',
                    'app/vendor/handlebars/handlebars.js',
                    'app/vendor/jquery.scrollTo/jquery.scrollTo.js',
                    'app/vendor/slideout/slideout-navigation.js',
                    'app/vendor/detectjs/detect.min.js',
                    'app/assets/js/templates/*.js',
                    'app/assets/js/components/*.js',
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
                banner: '/*!  HiØ JavaScript v<%= pkg.version %> by <%= pkg.author %>, released: <%= moment().format("HH:mm DD-MM-YYYY") %> */',
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
                            src: 'tmp/css/minified/theme-standard.v<%= pkg.version %>.min.css',
                            dest: 'tmp/css/minified/theme-standard.v<%= pkg.version %>.min.css'
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
                            src: 'tmp/css/minified/theme-standard.v<%= pkg.version %>.min.css',
                            dest: 'tmp/css/minified/theme-standard.v<%= pkg.version %>.min.css'
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
                            src: 'tmp/css/minified/theme-standard.v<%= pkg.version %>.min.css',
                            dest: 'tmp/css/minified/theme-standard.v<%= pkg.version %>.min.css'
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
                        'http://localhost:9000/tests/qunit/jobs/jobs-list.html',
                    ]
                }
            }
        },

        watch: {
            tests: {
                files: ['tests/**/*'],
                tasks: ['copy:tests', 'qunit'],
                options: {
                    livereload: true,
                },
            },
            hbs: {
                files: ['app/templates/**/*.hbs'],
                tasks: ['handlebars', 'copy:jstemplates'],
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
            images: {
                files: ['app/assets/images/**/*.jpg', 'app/assets/images/**/*.png', 'app/assets/images/**/*.svg'],
                tasks: ['copy:images'],
                options: {
                    livereload: true,
                },
            },

            favicon: {
                files: ['app/assets/images/**/*.ico'],
                tasks: ['copy:favicon'],
                options: {
                    livereload: true,
                },
            },

            fonts: {
                files: ['app/assets/fonts/**/*'],
                tasks: ['copy:fonts'],
                options: {
                    livereload: true,
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
    grunt.registerTask('subtaskJs', ['jshint', 'concat:scripts', 'uglify', 'copy:jscomponents', 'copy:jsmap', 'copy:jsdata', 'copy:jstemplates']);
    grunt.registerTask('subtaskCss', ['less', 'autoprefixer', 'cssmin']);
    grunt.registerTask('subtaskCopy', ['copy:images', 'copy:fonts', 'copy:vendor', 'copy:favicon', 'copy:tests']);
    grunt.registerTask('subtaskCopyDeploy', ['copy:images', 'copy:vendor', 'copy:favicon']);
    grunt.registerTask('subtaskViews', ['concat:pages']);
    grunt.registerTask('build', ['clean:build', 'subtaskCss', 'subtaskJs', 'versioning:build', 'subtaskCopy', 'subtaskViews']);


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
