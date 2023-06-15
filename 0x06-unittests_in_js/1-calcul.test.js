const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should test for integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should test for int and float', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should test for rounding down', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should test for rounding down', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should test for zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should test for negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1.6, -1.7), -4);
    });
  });

  describe('sUBTRACT', () => {
    it('should test for integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should test for int and float', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should test for rounding down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('should test for rounding up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('should test for zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should test for negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -1.7), 0);
    });
  });

  describe('dIVIDE', () => {
    it('should test for integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should test for int and float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should test for rounding down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });

    it('should test for rounding up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });

    it('should test for zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0.2), 'Error');
    });

    it('should test for negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -1.7), 1);
    });
  });
});
