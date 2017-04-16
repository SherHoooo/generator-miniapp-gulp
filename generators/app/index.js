'use strict';
const Generators = require('yeoman-generator')
const yosay = require('yosay')
const chalk = require('chalk')
const fu = require('fileutil')
// var _s = require('underscore.string');

class AppGenerator extends Generators {
  initializing () {
    this.pkg = require('../../package.json');
  }
  prompting () {
    // welcome tip
    this.log(yosay('Hello! Please enjoy building your wechat-miniapp'));

    const prompts = [{
      type: 'list',
      name: 'styleType',
      message: 'Which type of stylesheet would you like to use?',
      choices: [{
        name: 'css',
        value: 'css'
      }, {
        name: 'scss',
        value: 'scss'
      }, {
        name: 'less',
        value: 'less'
      }]
    }];

    return this.prompt(prompts).then(function (answers) {
      this.config = answers

    }.bind(this));
  }
  writing () {
    fu.copy(this.templatePath('src'), this.destinationPath('src'))
    const tasks = [{
      templatePath: 'gulpfile.js',
      destinationPath: 'gulpfile.js'
    }, {
      templatePath: 'config.js',
      destinationPath: 'config.js',
      param: {
        styleType: this.config.styleType
      }
    }, {
      templatePath: 'babelrc',
      destinationPath: '.babelrc'
    }, {
      templatePath: '.eslintrc.js',
      destinationPath: '.eslintrc.js'
    }, {
      templatePath: 'editorconfig',
      destinationPath: '.editorconfig'
    }, {
      templatePath: 'gitignore',
      destinationPath: '.gitignore'
    }, {
      templatePath: '_package.json',
      destinationPath: 'package.json'
    }, {
      templatePath: 'app.css',
      destinationPath: `src/app.${this.config.styleType}`
    }, {
      templatePath: 'index.css',
      destinationPath: `src/pages/index.${this.config.styleType}`
    }, {
      templatePath: 'demo.css',
      destinationPath: `src/pages/demo.${this.config.styleType}`
    }]
    tasks.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item.templatePath),
        this.destinationPath(item.destinationPath),
        item.param
      )
    })

  }

  install () {
    this.installDependencies({
      npm: true      
    });
  }

  end () {
  }
}

module.exports = AppGenerator;
