const Resource = require('./resource');

class Estimates extends Resource {
  constructor(quaderno) {
    super(quaderno, 'estimates');
  }

  /**
   * Deliver (Send) an estimate. will send the estimate to the
   * assigned contact email.
   * @param {String} [id] Estimate ID.
   * @return {Promise} The requested resource.
   */
  deliver(id) {
    return this.quaderno.get(`/estimates/${id}/deliver.json`);
  }
}

module.exports = Estimates;
