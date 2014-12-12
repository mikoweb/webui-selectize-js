module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            build: {
                src: [
                    "selectize/dist/js/selectize.js",
                    "js/define.js"
                ],
                dest: "selectize.js"
            }
        },
        uglify: {
            build: {
                src: "selectize.js",
                dest: "selectize.min.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify']);
};
