const Resource = require('./resource');

class Recurring extends Resource {
  constructor(quaderno) {
    super(quaderno, 'recurring');
  }
}

module.exports = Recurring;
