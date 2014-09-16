module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/css/form.css',
                    'src/css/listas.css',
                    'src/css/tipografia.css'
                ],
                dest: 'dist/css/all.css'
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
                tasks: ['jshint']
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
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', ['concat', 'cssmin']);
    grunt.registerTask('dev', ['connect', 'watch']);

};