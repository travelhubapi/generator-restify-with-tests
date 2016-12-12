# generator-restify-with-tests

 [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Restify api with unit and integrated tests

## Installation

First, install [Yeoman](http://yeoman.io) and generator-restify-with-tests using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-restify-with-tests
```

Then generate your new project:

```bash
yo restify-with-tests
```

## Features
### Including
  * ```.gitignore```
  * ```.eslintrc``` ([airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
  * ```.npmignore```
  * ```.codeclimate.yml```
  * ```.travis.yml```
  * ```.editorconfig```
  * nodemon
  * git-pre-push (run test)
  * git-pre-commit (run lint)
  * git-post-commit (run git status)

## Usage

### Scripts

* Development
  ```
    npm run dev

  ```
  run nodemon and tests

* Coverage
  ```
    npm run coverage

  ```
  run istanbul coverage and put result in ```coverage/```

* Code Climate
  ```
    npm run climate-coverage

  ```
  run coverage and send it to [code-climate](https://codeclimate.com/) (you need to set CODECLIMATE_REPO_TOKEN as an enviroment variable)

* Code Climate dotenv
  ```
    npm run climate-coverage-dotenv

  ```
  run coverage and send it to [code-climate](https://codeclimate.com/) (you need to set CODECLIMATE_REPO_TOKEN in .env file)

* Start
  ```
    npm start

  ```
  run ```node src/index.js```

* Dependencies Vulnerabilities
  ```
    npm run check-dependencies

  ```
  check dependencies vulnerabilities using [nsp](https://github.com/nodesecurity/nsp)

* Post install
  ```
    npm run postinstall

  ```
  call check-dependencies, this is will be called after every package installation

* Linter
  ```
    npm run lint

  ```
  run ```eslint src``` according ```.eslintrc``` file

* Tests

  * Unit
    ```
      npm test

    ```
    run ```mocha --opts test/unit/mocha.opts test/unit```

  * Integration
    ```
      npm run test-integration

    ```
    run ```mocha --opts test/integration/mocha.opts test/integration```

  * All
    ```
      npm run test-all

    ```
    run ```npm test && npm run test-integration```


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Marcos Rava]()


[npm-image]: https://badge.fury.io/js/generator-restify-with-tests.svg
[npm-url]: https://npmjs.org/package/generator-restify-with-tests
[travis-image]: https://travis-ci.org/travelhubapi/generator-restify-with-tests.svg?branch=master
[travis-url]: https://travis-ci.org/travelhubapi/generator-restify-with-tests
[daviddm-image]: https://david-dm.org/travelhubapi/generator-restify-with-tests.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/travelhubapi/generator-restify-with-tests
