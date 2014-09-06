module.exports = gruntConfig;

function gruntConfig(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    jsPath: 'assets/javascripts',
    componentsPath: 'assets/components',
    cssPath: 'assets/stylesheets',
    htmlPath: 'assets/templates',
    distPath: 'dist',

    //name that app saves to (ex. (name).js) no spaces
    appName: 'AngleSass',
    
    concat: require('./grunt/concat'),
    watch: require('./grunt/watch'),
    uglify: require('./grunt/uglify'),
    //bgShell: require('./grunt/bgShell'),
    ngtemplates: require('./grunt/ngtemplates'),
    karma: require('./grunt/karma'),
    sass: require('./grunt/sass')
  });

  for (var task in pkg.devDependencies) {
    if (task !== 'grunt' && !task.indexOf('grunt')) {
      grunt.loadNpmTasks(task);
    }
  }

  grunt.registerTask('build:dev', [
    'ngtemplates:dev',
    'concat',
    'sass:dev'
  ]);
  grunt.registerTask('build:dist', [
    'build:dev',
    'uglify'
  ]);
  //grunt.registerTask('protractor', ['bgShell:protractor']);
  grunt.registerTask('test:dev', [
    'build:dev',
    'karma:dev'
    //'protractor'
  ]);
  grunt.registerTask('default', [
    'build:dist'
  ]);
}