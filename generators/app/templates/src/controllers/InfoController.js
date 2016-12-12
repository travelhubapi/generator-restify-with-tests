module.exports = class InfoController {
  constructor(repository) {
    this.repository = repository;

    this.getById = (req, res, next) =>
      this.repository.getById(req.params.id)
        .then(data => res.send(data))
        .then(next);

    this.get = (req, res, next) =>
      this.repository.get()
        .then(data => res.send(data))
        .then(next);

    this.post = (req, res, next) =>
      this.repository.post(req.body)
        .then(data => res.send(data))
        .then(next);

    this.del = (req, res, next) =>
      this.repository.del(req.params.id)
        .then(data => res.send(data))
        .then(next);
  }
};
