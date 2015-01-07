'use strict';

var rick = require('rick-cli');

module.exports = function(grunt) {
  grunt.registerMultiTask(
    'rick', 
    'You\'re not pushing to master on red, are you?',
    function() {
      var data = this.data;
      var url = data.url;
      var job = data.job;
      
      rick(url, job, this.async());
    }
  );
};
