const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should test for integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should test for int and float', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should test for rounding down', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should test for rounding down', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should test for zero', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should test for negative', () => {
      expect(calculateNumber('SUM', -1.6, -1.7)).to.equal(-4);
    });
  });

  describe('sUBTRACT', () => {
    it('should test for integers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('should test for int and float', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should test for rounding down', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should test for rounding up', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('should test for zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('should test for negative', () => {
      expect(calculateNumber('SUBTRACT', -1.6, -1.7)).to.equal(0);
    });
  });

  describe('dIVIDE', () => {
    it('should test for integers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should test for int and float', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should test for rounding down', () => {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });

    it('should test for rounding up', () => {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });

    it('should test for zero', () => {
      expect(calculateNumber('DIVIDE', 4, 0.2)).to.equal('Error');
    });

    it('should test for negative', () => {
      expect(calculateNumber('DIVIDE', -1.6, -1.7)).to.equal(1);
    });
  });
});
