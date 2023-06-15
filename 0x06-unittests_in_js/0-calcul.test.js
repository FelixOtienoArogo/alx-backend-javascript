const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should test if numbers are rounded', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should test if numbers are rounded', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should test if numbers are rounded', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should test if numbers are rounded', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
