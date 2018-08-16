const Resource = require('./resource');

class Credits extends Resource {
  constructor(quaderno) {
    super(quaderno, 'credits');
  }

  /**
   * Deliver (Send) a credit. Will send the invoice to the
   * assigned contact email.
   * @param {String} [id] Credit ID.
   * @return {Promise} The requested resource.
   */
  deliver(id) {
    return this.quaderno.get(`/credits/${id}/deliver.json`);
  }
}

module.exports = Credits;
