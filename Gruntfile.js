'use strict';
module.exports = function(grunt) {



    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);


    var taskConfig = {

        pkg: grunt.file.readJSON('package.json'),

        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: 'cw-styleguide', // defaults to the name in package.json, or will use project directory's name
                success: true, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './dist/',
                    src: ['*.css'],
                    dest: './dist/',
                    ext: '.min.css'
                }]

            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'dist/coverwallet.css': 'sass/coverwallet.scss'
                }
            },
            guide: {
                options: {

                },
                files: {
                    'styleguide/public/coverwallet-styleguide.css': 'sass/coverwallet-styleguide.scss'
                }
            }

        },
        compass: { // Task
            dist: { // Target
                options: { // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production'
                }
            },
            guide: { // Another target
                options: {
                    sassDir: 'sass',
                    cssDir: 'styleguide/public',
                    imagesDir: 'images',
                    httpFontsPath: 'fonts',
                    fontsDir: './fonts',
                    imagesPath: './images'
                }
            }
        },
        clean: [
            './dist'
        ],
        copy: {
            fonts: {
                expand:true,
                cwd:'bower_components/fontawesome/fonts/',
                src: '**',
                dest: 'styleguide/public/fonts/',
            },
            images: {
                expand:true,
                cwd:'images/',
                src: '**',
                dest: 'styleguide/public/images/',
            },
        },
        kss: {
            options: {
                template: './template',
                css: 'public/coverwallet-styleguide.css'
            },
            dist: {
                files: {
                    './styleguide': ['./sass']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    livereload: true,
                    base: '.'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['./sass/**/*'],
                tasks: ['kss:dist', 'compass:guide', 'copy']
            }
        }

    };

    grunt.initConfig(grunt.util._.extend(taskConfig, {}));

    grunt.registerTask('serve', [
        'clean', 'kss:dist', 'compass:guide', 'copy', 'connect:server', 'watch'
    ]);

    grunt.registerTask('styleguide', [
        'clean', 'kss:dist', 'compass:guide', 'copy'
    ]);

    grunt.registerTask('dist', [
        'clean', 'compass:dist', 'cssmin:dist'
    ]);

};
