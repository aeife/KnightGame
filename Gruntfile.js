module.exports = function (grunt) {

    grunt.initConfig({
        ngmin: {
            build: {
                src: [
                    'src/**/*.js',
                    '!src/**/*.spec.js'
                ],
                dest: 'build/app.js'
            }
        },
        uglify: {
            build: {
                src: [
//                  'src/**/*.js',
//                  '!src/**/*.spec.js'
                    'build/app.js'
                ],
                dest: 'build/app.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ngmin');

    grunt.registerTask('build', ['ngmin', 'uglify']);
}