const Resource = require('./resource');

class Invoices extends Resource {
  constructor(quaderno) {
    super(quaderno, 'invoices');
  }

  /**
   * Deliver (Send) an invoice. Will send the invoice to the
   * assigned contact email.
   * @param {String} [id] Invoice ID.
   * @return {Promise} The requested resource.
   */
  deliver(id) {
    return this.quaderno.get(`/invoices/${id}/deliver.json`);
  }
}

module.exports = Invoices;
