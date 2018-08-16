const Resource = require('./resource');

class Expenses extends Resource {
  constructor(quaderno) {
    super(quaderno, 'expenses');
  }
}

module.exports = Expenses;
