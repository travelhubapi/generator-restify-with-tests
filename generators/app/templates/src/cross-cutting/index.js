const requireDirectory = require('require-directory');

const crossCutting = requireDirectory(module, {
  include: path => /.*\.js$/.test(path),
  rename: name => name.replace(/(-)(\w)/gi, g => g[1].toUpperCase()),
});

module.exports = crossCutting;

