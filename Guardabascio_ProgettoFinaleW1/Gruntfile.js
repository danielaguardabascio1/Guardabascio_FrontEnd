module.exports = function (grunt) {
    // Project configuration.

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },

        less: {
            target: {
                files: {
                    'src/css/style_css.css': 'src/css/style_css.less'
                }
            }
        },


        browserify: {
            dist: {
                files: {
                    'src/js/bundle.js': 'src/js/javascript.js'
                }
            }
        },

        watch: {
            script: {
                files: ['src/js/javascript.js'],
                tasks: ['browserify']
            },
            cssless:{
                files: [ 'src/css/style_css.less'],
                tasks: ['less']
            }

        },

        cssmin: {
            target: {
                files: {
                    'dist/css/css.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'src/css/style_css.css']
                }
            }
        },

        babel: {
            options: {
                presets: ['env']
            },
            dist: {
                files: {
                    'src/js/bubel-ema5.js': 'src/js/bundle.js'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/js/script.min.js': 'src/js/bubel-ema5.js'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //quando siamo in sviluppo

    //grunt.task.registerTask('develop', ['less','browserify', 'watch']);
    grunt.task.registerTask('develop', ['watch']);
    //quando costruiiamo il sito
    grunt.task.registerTask('build', ['cssmin', 'babel', 'uglify', 'serve']);
    
   };
