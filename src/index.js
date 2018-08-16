const request = require('request');
const assert = require('assert');
const url = require('url');
const resources = require('./resources');
const QuadernoError = require('./errors/error');

class Quaderno {
  constructor(options) {
    this.validateOptions(options);
    this.requestConfig = this.getRequestConfig(options.privateApiKey);
    this.baseUrlObject = this.getBaseUrlObject(options.accountName,
      options.privateApiKey);

    this.contacts = new resources.Contacts(this);
    this.receipts = new resources.Receipts(this);
    this.invoices = new resources.Invoices(this);
    this.credits = new resources.Credits(this);
    this.expenses = new resources.Expenses(this);
    this.estimates = new resources.Estimates(this);
    this.recurring = new resources.Recurring(this);
    this.items = new resources.Items(this);
    this.payments = new resources.Payments(this);
    this.taxes = new resources.Taxes(this);
    this.evidence = new resources.Evidence(this);
    this.webhooks = new resources.Webhooks(this);
  }

  /**
   * Validate the provided options object against certain rules.
   * The `accountName` and `privateApiKey` properties have 
   * mandatory String values.
   * @param {Object} [options] Quaderno init options.
   */
  validateOptions(options) {
    const { accountName, privateApiKey } = options;
    if (!accountName || typeof accountName !== 'string') {
      throw new Error('No accountName is provided');
    }
    if (!privateApiKey || typeof privateApiKey !== 'string') {
      throw new Error('No privateApiKey is provided');
    }
  }

  /**
   * Returns a configuration object which can be used when
   * performing a HTTP request to the Quaderno API.
   * @param {String} [privateApiKey] Private Quaderno API key.
   * @return {Object}
   */
  getRequestConfig(privateApiKey) {
    return {
      json: true,
      auth: {
        username: privateApiKey,
        password: 'x',
      },
    };
  }

  /**
   * Returns an object containing URL information (a {@link urlObject})
   * which can be provided to {@link url.format()} to retrieve a
   * formatted URL string derived from the {@link urlObject}.
   * @param {String} [accountName] Quaderno account name.
   * @param {String} [privateApiKey] Private Quaderno API key.
   * @return {Object}
   */
  getBaseUrlObject(accountName, privateApiKey) {
    const sandbox = /sk_test/.test(privateApiKey);
    return {
      protocol: sandbox ? 'http' : 'https',
      hostname: `${accountName}.${sandbox ? 'sandbox-' : ''}quadernoapp.com/api`,
    };
  }

  /**
   * @param {Object} [urlObject] A URL object (as returned 
   * by {@link url.parse()} or constructed otherwise).
   * @return {String} A formatted URL string derived from
   * {@link urlObject}.
   */
  url(urlObject) {
    return url.format({
      ...this.baseUrlObject,
      ...urlObject,
    });
  }

  /**
   * @param {String} [method] The HTTP request method
   * @param {Object} [urlObject] A URL object (as returned 
   * by url.parse() or constructed otherwise).
   * @param {Object} [body]
   * @param {HTTPStatusCode} [successCode] The HTTP status code that
   * signifies a successful request.
   * @return {Promise} The response from the API.
   */
  dispatch(method, urlObject, body, successCode=200) {
    return new Promise((resolve, reject) => {
      const options = {
        url: this.url(urlObject),
        method,
        body,
        ...this.requestConfig,
      };

      request(options, (error, response, body) => {
        if (error) {
          return reject(Error(error));
        } else if (response.statusCode !== successCode) {
          return reject(new QuadernoError(body));
        } else {
          return resolve(body);
        }
      });
    });
  }

  /**
   * @param {String} [pathname]
   * @param {Object} [body]
   * @return {Promise} The response from the API.
   */
  post(pathname, body) {
    const urlObject = { pathname };
    return this.dispatch('POST', urlObject, body, 201);
  }

  /**
   * @param {String} [pathname]
   * @param {Object} [body]
   * @return {Promise} The response from the API.
   */
  get(pathname, query) {
    const urlObject = { pathname, query };
    return this.dispatch('GET', urlObject, undefined, 200);
  }

  /**
   * @param {String} [pathname]
   * @param {Object} [body]
   * @return {Promise} The response from the API.
   */
  put(pathname, body) {
    const urlObject = { pathname };
    return this.dispatch('PUT', urlObject, body, 201);
  }

  /**
   * @param {String} [pathname]
   * @param {Object} [body]
   * @return {Promise} The response from the API.
   */
  delete(pathname) {
    const urlObject = { pathname };
    return this.dispatch('DELETE', urlObject, undefined, 204);
  }
}

module.exports = Quaderno;
