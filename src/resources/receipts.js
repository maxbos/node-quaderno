const Resource = require('./resource');

class Receipts extends Resource {
  constructor(quaderno) {
    super(quaderno, 'receipts');
  }

  /**
   * Deliver (Send) a receipt. Will send the recepit to the
   * assigned contact email.
   * @param {String} [id] Invoice ID.
   */
  deliver(id) {
    return this.quaderno.get(`/receipts/${id}/deliver.json`);
  }
}

module.exports = Receipts;
