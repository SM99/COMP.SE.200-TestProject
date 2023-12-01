import add from '../src/add.js';

describe('Add function', () => {
  it('Should add two positive numbers correctly', () => {
    expect(add(3, 2)).toBe(5);
  });
});
