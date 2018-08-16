const assert = require('assert');
const rewire = require('rewire');

const Quaderno = rewire('../');

describe('Quaderno', () => {
  describe('instantiation', () => {
    it('should throw an error if accountName is not provided', () => {
      assert.throws(() => {
        new Quaderno({
          privateApiKey: '12345678',
        });
      }, /^Error: No accountName is provided$/);
    });

    it('should throw an error if privateApiKey is not provided', () => {
      assert.throws(() => {
        new Quaderno({
          accountName: 'nonce',
        });
      }, /^Error: No privateApiKey is provided$/);
    });
  });

});
