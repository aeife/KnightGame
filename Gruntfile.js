module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            build: {
                src: [
                    'src/**/*.js',
                    '!src/**/*.spec.js'
                ],
                dest: 'build/app.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}