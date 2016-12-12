const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-restify-with-tests:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt',
    ]);
  });
});
