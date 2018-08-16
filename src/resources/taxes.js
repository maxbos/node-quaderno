class Taxes {
  constructor(quaderno) {
    this.quaderno = quaderno;
  }

  /**
   * Calculate taxes. Will calculate the applicable taxes
   * given a customer’s data.
   * @param {Object} [query] An object of query parameters.
   * @return {Promise} The requested resource.
   */
  calculate(query) {
    return this.quaderno.get(`/taxes/calculate.json`, query);
  }

  /**
   * Validating VAT numbers. Will validate the given EU VAT
   * number.
   * @param {Object} [query] An object of query parameters.
   * @return {Promise} The requested resource.
   */
  validate(query) {
    return this.quaderno.get('/taxes/validate.json', query);
  }
}

module.exports = Taxes;
