class Resource {
  /**
   * Resource is the base class for each Quaderno API
   * resource. It sets the current quaderno instance so
   * it can be used to dispatch requests.
   * @param {Quaderno} [quaderno] An instance of Quaderno
   */
  constructor(quaderno, name) {
    this.quaderno = quaderno;
    this.name = name;
  }

  /**
   * Creates a resource with the provided parameters.
   * @param {Object} [params] The params to create a Quaderno resource.
   * @return {Promise} The requested resource.
   */
  create(params) {
    return this.quaderno.post(`/${this.name}.json`, params);
  }

  /**
   * Will return all records for this resource.
   * @return {Promise} The requested resource.
   */
  findAll() {
    return this.quaderno.get(`/${this.name}.json`);
  }

  /**
   * Returns the resource for the resource with provided ID.
   * @param {String} [id] Resource id.
   * @return {Promise} The requested resource.
   */
  findById(id) {
    return this.quaderno.get(`/${this.name}/${id}.json`);
  }

  /**
   * Will update the resource with the provided parameters.
   * @param {Int} [id] Resource id.
   * @param {Object} [params]
   * @return {Promise} The requested resource.
   */
  update(id, params) {
    return this.quaderno.put(`/${this.name}/${id}.json`, params);
  }

  /**
   * Will delete the resource that has the provided ID.
   * @param {Int} [id] Resource id.
   * @return {Promise} The requested resource.
   */
  delete(id) {
    return this.quaderno.delete(`/${this.name}/${id}.json`);
  }
}

module.exports = Resource;
