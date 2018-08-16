const Resource = require('./resource');

class Webhooks extends Resource {
  constructor(quaderno) {
    super(quaderno, 'webhooks');
  }
}

module.exports = Webhooks;
