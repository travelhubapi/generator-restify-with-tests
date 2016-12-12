const BaseRepository = require('../BaseRepository.js');

module.exports = class InfoMemoryRepository extends BaseRepository {
  constructor(infos) {
    super();

    let data = infos || [
      { info: 'Some information', id: '1' },
      { info: 'Some information', id: '2' },
    ];

    this.get = () => {
      const deferred = this.defer();
      deferred.resolve(data);
      return deferred.promise;
    };

    this.getById = (id) => {
      const result = data.find(i => i.id === id);
      return this.Promise.resolve(result);
    };

    this.post = (info) => {
      data.push(info);
      return this.Promise.resolve(data);
    };

    this.del = (id) => {
      data = data.filter(element => id !== element.id);
      return this.Promise.resolve(data);
    };
  }
};
