const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should test for integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should test for int and float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should test for rounding down', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should test for rounding down', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
