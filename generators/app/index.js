const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const shell = require('shelljs');

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/--+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function prompting() {
  this.log(yosay(`Welcome to the ${chalk.red('restify-with-tests')} generator!`));

  let authorName;
  let authorEmail;

  if (shell.which('git')) {
    authorName = shell.exec('git config --get user.name', { silent: true }).stdout.trim();
    authorEmail = shell.exec('git config --get user.email', { silent: true }).stdout.trim();
  }

  const prompts = [
    {
      type: 'input',
      name: 'apiName',
      message: 'Your api name',
      default: this.appname,
    },
    {
      type: 'input',
      name: 'apiDescription',
      message: 'Your api description',
    },
    {
      type: 'input',
      name: 'authorName',
      message: 'Author name',
      default: authorName,
    },
    {
      type: 'input',
      name: 'authorEmail',
      message: 'Author email',
      default: authorEmail,
    },
    {
      type: 'input',
      name: 'authorUrl',
      message: 'Author url',
    },
    {
      type: 'input',
      name: 'githubUser',
      message: 'Github user or organization',
    },
    {
      type: 'confirm',
      name: 'newDirectory',
      message: 'Would you like to create a new directory for your project?',
      default: true,
    },
  ];

  return this.prompt(prompts)
    .then((answers) => {
      this.props = answers;
      this.props.slug = slugify(this.props.apiName);
      if (this.props.newDirectory) {
        this.destinationRoot(this.props.slug);
      }
    });
}

function writing() {
  this.fs.copyTpl(this.templatePath('./**/[^_]*'), this.destinationPath('./'), this.props);

  this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.props);

  this.fs.copy(
    this.templatePath('_.env'),
    this.destinationPath('.env'));

  this.fs.copy(
    this.templatePath('_.editorconfig'),
    this.destinationPath('.editorconfig'));

  this.fs.copy(
    this.templatePath('_.eslintrc'),
    this.destinationPath('.eslintrc'));

  this.fs.copy(
    this.templatePath('_.npmignore'),
    this.destinationPath('.npmignore'));

  this.fs.copy(
    this.templatePath('test/_.eslintrc'),
    this.destinationPath('test/.eslintrc'));

  this.fs.copy(
    this.templatePath('_.gitignore'),
    this.destinationPath('.gitignore'));
}

function install() {
  this.installDependencies();
}

module.exports = yeoman.Base.extend({
  prompting,
  writing,
  install,
});
