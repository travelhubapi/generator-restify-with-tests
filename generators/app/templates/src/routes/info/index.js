const Controller = require('../../controllers/InfoController');
const Repository = require('../../repositories/info/InfoMemoryRepository');

const repository = new Repository();

const controller = new Controller(repository);

exports.loadIn = function loadIn(server) {
  server.get('v1/info', controller.get);
  server.get('v1/info/:id', controller.getById);
  server.del('v1/info/:id', controller.del);
};
