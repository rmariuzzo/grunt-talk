module.exports = function (grunt) {

    grunt.initConfig({

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
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};