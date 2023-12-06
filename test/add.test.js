import add from '../src/add.js';

describe('Add function', () => {

  it('Should add two positive numbers correctly', () => {
    expect(add(3, 2)).toBe(5);
  });

  it('Should correctly add floating-point numbers', () => {
    expect(add(5.5, 4.3)).toBeCloseTo(9.8);
  });

  it('Should handle adding zero', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
  });

  it('Should handle negative numbers', () => {
      expect(add(-6, 4)).toBe(-2);
      expect(add(6, -4)).toBe(2);
      expect(add(-6, -4)).toBe(-10);
  });

  it('Should handle a single argument correctly', () => {
      expect(add(5)).toBe(5);
  });

  it('Should return 0 when no arguments are provided', () => {
      expect(add()).toBe(0);
  });

  it('Should handle very large numbers', () => {
      expect(add(1e+308, 1e+308)).toBe(2e+308);
  });

  it('Should handle very small numbers', () => {
      expect(add(1e-308, 1e-308)).toBe(2e-308);
  });
});
