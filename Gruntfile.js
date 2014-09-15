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
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

};