module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            css: {
                src: [
                    'src/css/form.css',
                    'src/css/listas.css',
                    'src/css/tipografia.css'
                ],
                dest: 'dist/css/all.css'
            },
            js: {
                src: [
                    'src/js/lib/jquery-2.1.1.min.js',
                    'src/js/lib/jquery.nicescroll.min.js',
                    'src/js/sumar.js',
                    'src/js/restar.js',
                    'src/js/multiplicar.js',
                    'src/js/dividir.js',
                    'src/js/app.js'
                ],
                dest: 'dist/js/all.js'
            }
        },

        cssmin: {
            dist: {
                src: 'dist/css/all.css',
                dest: 'dist/css/all.concat.css'
            },
            options: {
                banner: '/*! <%= pkg.name %>, <%= pkg.version %>, <%= grunt.template.today("yyyy") %> - Rubens Mariuzzo */'
            }
        },

        watch: {
            css: {
                files: 'src/**/*.css',
                tasks: ['concat', 'cssmin'],
                options: {
                    livereload: true // default port is 35729
                }
            },
            js: {
                files: 'src/js/*.js',
                tasks: ['jshint', 'jasmine']
            }
        },

        connect: {
            server: {
                options: {
                    server: '*',
                    port: 7676
                }
            }
        },

        jshint: {
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: 'src/js/*.js'
            }
        },

        jasmine: {
            test: {
                src: 'src/**/*.js',
                options: {
                    specs: 'test/spec/*_spec.js',
                    vendor: [
                        'src/js/lib/jquery-2.1.1.min.js',
                        'src/js/lib/jquery.nicescroll.min.js'
                    ]
                }
            }
        },

        uglify: {
            js: {
                src: 'dist/js/all.js',
                dest: 'dist/js/all.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['concat', 'cssmin', 'jshint', 'jasmine', 'uglify']);
    grunt.registerTask('dev', ['connect', 'watch']);

};