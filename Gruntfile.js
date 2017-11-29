module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.initConfig({
        sass: {
            style: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': ['sass/style.scss']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            your_target: {
                src: 'css/style.css'
            },
        },
        watch: {
            scripts: {
                files: ['**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
        }
    });

    grunt.registerTask("run", [
        "sass",
        "autoprefixer"
    ])
};