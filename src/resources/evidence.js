const Resource = require('./resource');

class Evidence extends Resource {
  constructor(quaderno) {
    super(quaderno, 'evidence');
    this.update = undefined;
    this.delete = undefined;
  }
}

module.exports = Evidence;
