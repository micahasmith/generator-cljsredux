'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

// props hack thx
var _props = {};

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the premium ' + chalk.red('generator-cljsredux') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Project name?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      props.nameUnderscored = props.name.replace(' ','_');
      props.nameHyphened = props.name.replace(' ','-');
      this.props = props;

      _props = props;
    }.bind(this));
  },

  writing: function () {
    //console.log(this.props, _props);
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'), this.props);

    this.fs.copyTpl(
      this.templatePath('src/core.cljs'),
      this.destinationPath('src/'+_props.nameUnderscored+'/core.cljs'), this.props);

    this.fs.copyTpl(
      this.templatePath('scripts/build.clj'),
      this.destinationPath('scripts/build.clj'), this.props);

    this.fs.copyTpl(
      this.templatePath('scripts/watch.clj'),
      this.destinationPath('scripts/watch.clj'), this.props);

    this.fs.copyTpl(
      this.templatePath('scripts/release.clj'),
      this.destinationPath('scripts/release.clj'), this.props);

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), this.props);

    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), this.props);

    this.fs.copy(
      this.templatePath('lib/cljs.jar'),
      this.destinationPath('lib/cljs.jar')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
