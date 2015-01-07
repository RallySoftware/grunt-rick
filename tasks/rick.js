'use strict';

var rick = require('rick-cli');

module.exports = function(grunt) {
  grunt.registerTask('rick', 'You\'re not pushing to master on red, are you?', function() {
    var options = grunt.config.data.rick;
    var url = options.url;
    var job = options.job;

    rick(url, job, this.async());
  });
};
