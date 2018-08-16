class Payments {
  constructor(quaderno) {
    this.quaderno = quaderno;
  }

  /**
   * @param {Int} [invoiceId]
   * @param {Object} [params] The params to create a Quaderno Invoice Payment.
   * @return {Promise} The requested resource.
   */
  createForInvoice(invoiceId, params) {
    return this.quaderno.post(`/invoices/${invoiceId}/payments.json`, params);
  }

  /**
   * @param {Int} [expenseId]
   * @param {Object} [params] The params to create a Quaderno Expense Payment.
   * @return {Promise} The requested resource.
   */
  createForExpense(expenseId, params) {
    return this.quaderno.post(`/expenses/${expenseId}/payments.json`, params);
  }

  /**
   * Get a single payment on an invoice.
   * @param {Int} [invoiceId]
   * @param {Int} [paymentId]
   * @return {Promise} The requested resource.
   */
  getForInvoice(invoiceId, paymentId) {
    return this.quaderno.get(`/invoices/${invoiceId}/payments/${paymentId}.json`);
  }

  /**
   * Get a single payment on an invoice.
   * @param {Int} [invoiceId]
   * @param {Int} [paymentId]
   * @return {Promise} The requested resource.
   */
  getForExpense(expenseId, paymentId) {
    return this.quaderno.get(`/expenses/${expenseId}/payments/${paymentId}.json`);
  }

  /**
   * Deletes a registered invoice payment with specified `paymentId`.
   * @param {Int} [invoiceId]
   * @param {Int} [paymentId]
   * @return {Promise} The requested resource.
   */
  deleteForInvoice(invoiceId, paymentId) {
    return this.quaderno.delete(`/invoices/${invoiceId}/payments/${paymentId}.json`);
  }

  /**
   * Deletes a registered expense payment with specified `paymentId`.
   * @param {Int} [expenseId]
   * @param {Int} [paymentId]
   * @return {Promise} The requested resource.
   */
  deleteForExpense(expenseId, paymentId) {
    return this.quaderno.delete(`/expenses/${expenseId}/payments/${paymentId}.json`);
  }
}

module.exports = Payments;
