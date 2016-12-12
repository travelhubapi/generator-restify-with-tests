const BaseRepository = require('../BaseRepository.js');
const request = require('request-promise').defaults({
  json: true,
});
const { throwMissingParameter } = require('../../cross-cutting');

module.exports = class InfoApiRepository extends BaseRepository {
  constructor(baseUrl) {
    super();

    const { url = throwMissingParameter('baseUrl') } = { url: baseUrl };

    this.baseUrl = url;

    this.get = () => request.get(`${this.baseUrl}/info`);
    this.getById = id => request.get(`${this.baseUrl}/info/${id}`);
    this.post = info => request.post({ url: `${this.baseUrl}/info`, body: info });
    this.del = id => request.del(`${this.baseUrl}/info/${id}`);
  }
};
