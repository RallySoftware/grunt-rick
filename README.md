grunt-rick [![npm version](https://badge.fury.io/js/grunt-rick.svg)](http://badge.fury.io/js/grunt-rick)
==========

a grunt plugin enabling [Rick](https://github.com/RallySoftware/rick), the build enforcer

## Config

Rick can be configured, in your Gruntfile, to look at any job on any [Jenkins](http://jenkins-ci.org/) server.

```js
grunt.initConfig({
  rick: {
    myFirstJob: {
      url: 'jenkins.myorg.com',
      job: 'myFirstJob'
    },
    mySecondJob: {
      url: 'jenkins.myorg.com',
      job: 'mySecondJob'
    }
  }
});

grunt.loadNpmTasks('grunt-rick');
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
grunt.registerTask('default', ['jshint', 'rick']);
```

Once installed, `grunt rickMe` can generate a pre-push git-hook for you and put it in your project's '.git/hooks' directory. It will prompt you for the variables it needs to create a hook specifically for your project.

```bash
$ grunt rickMe
Running "rickMe" task
---------------------
Hi, I'm Rick.
I can help you protect the Jenkins build by dropping a pre-push git-hook in your repo.
That way, I'll be able to warn you if you are pushing to a broken build.

prompt: Branch Jenkins is monitoring:  (master)
prompt: Repo Jenkins is monitoring:  (git@github.com:yourAwesomeRepo.git)
prompt: Gruntfile:  (/Users/you/projects/thingy/Gruntfile.coffee)
```

Rick will take your answers and display your custom git-hook so that you can check it for errors. He will also tell you where he placed the hook.

If you made a mistake in the config, you can re-run `grunt rickMe` to overwrite the old hook, edit the file by hand, or simply delete it.
