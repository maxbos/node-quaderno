const Resource = require('./resource');

class Contacts extends Resource {
  constructor(quaderno) {
    super(quaderno, 'contacts');
  }

  /**
   * Get a single contact by payment gateway ID.
   * @param {String} [paymentGateway]
   * @param {String} [customerId]
   * @return {Promise} The requested resource.
   */
  getByPaymentGateway(paymentGateway, customerId) {
    return this.quaderno.get(`/${paymentGateway}/customers/${customerId}.json`);
  }
}

module.exports = Contacts;
