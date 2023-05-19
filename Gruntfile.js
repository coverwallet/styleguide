module.exports = function(grunt) {
    
    const sass = require('sass');
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
                    implementation: sass,
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
                    'styleguide/public/css/coverwallet-styleguide.css': 'sass/coverwallet-styleguide.scss'
                }
            }

        },
        clean: [
            './dist'
        ],
        copy: {
            fonts: {
                expand:true,
                cwd:'fonts/',
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
        exec: {
            generateGuide: {
              command: 'npm run generate',
              stdout: true,
              stderr: true
            }
        },
        // kss: {
        //     options: {
        //         template: './template',
        //         css: 'public/coverwallet-styleguide.css?t=' + new Date().getTime(),
        //         js: '../js/selectFx.js'
        //     },
        //     dist: {
        //         files: {
        //             './styleguide': ['./sass/']
        //         }
        //     }
        // },
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
                tasks: ['sass:guide', 'exec:generateGuide', 'sass:guide', 'copy']
            }
        }

    };

    grunt.initConfig(grunt.util._.extend(taskConfig, {}));

    grunt.registerTask('serve', [
        'clean', 'exec:generateGuide', 'sass:guide', 'copy', 'connect:server', 'watch'
    ]);

    grunt.registerTask('styleguide', [
        'clean', 'exec:generateGuide', 'sass:guide', 'copy'
    ]);

    grunt.registerTask('dist', [
        'clean', 'sass:dist', 'cssmin:dist'
    ]);

    grunt.registerTask('dist-guide', [
        'clean', 'exec:generateGuide', 'sass:guide', 'copy'
    ]);

};
