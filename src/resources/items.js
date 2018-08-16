const Resource = require('./resource');

class Items extends Resource {
  constructor(quaderno) {
    super(quaderno, 'items');
  }
}

module.exports = Items;
