grunt-rick
==========

a grunt plugin enabling [Rick](https://github.com/mikeholm/rick), the build enforcer

## Config

Rick can be configured, in your Gruntfile, to look at a single job on any [Jenkins](http://jenkins-ci.org/) server.

```js
module.exports = function(grunt) {
  grunt.initConfig({
    rick: {
      url: '<yourJenkinsUrl>',
      job: '<yourJobName>'
    }
  });

  grunt.loadNpmTasks('grunt-rick');
};
```

### url - required

Must be a string and should use the http protocol. If your url does not start with 'http://', it will be added for you. Also, if your url has a trailing forward-slash, it will be removed for you.

### job - required

Must be a string and must be only the specific Jenkins job name. If your job is several folders deep, put the entire url, after navigating through all the folders, in the `url` property and just put the job name in the `job` property.

## Usage

Add the latest grunt-rick to your package.json.

```bash
$ npm install grunt-rick --save-dev
```

Invoke Rick from the command line.

```bash
$ grunt rick
```

Or attach the `rick` task to another one of the tasks in your Gruntfile.

```js
module.exports = function(grunt) {
  grunt.registerTask('default', 'rick');
};
```
