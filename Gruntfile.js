'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    rick: {
      url: 'almci/job/alm-jobs',
      job: 'alm'
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', 'rick');
};
