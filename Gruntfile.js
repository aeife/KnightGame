module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-karma');

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
        },
        watch: {
            scripts: {
                files: [
                    'src/**/*.js',
                    '!src/**/*.spec.js'
                ],
                tasks: ['build']
            },
            tests: {
                files: [
                    'src/**/*.js'
                ],
                tasks: ['karma']
            }
        },
        karma: {
            unit: {
                singleRun: true,
                configFile: 'karma.conf.js'
//                autoWatch: true
            }
        }
    });

    grunt.registerTask('build', ['ngmin', 'uglify']);
}