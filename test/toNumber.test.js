import toNumber from '../src/toNumber.js';

describe('toNumber function', () => {
    it('Should return a number as a number', () => {
    expect(toNumber(3)).toBe(3);
    expect(toNumber(-4)).toBe(-4);
    expect(toNumber(0)).toBe(0);
    });

    it('Should convert viable strings correctly', () => {
    expect(toNumber('3')).toBe(3);
    expect(toNumber('-4')).toBe(-4);
    expect(toNumber('0')).toBe(0);
    });

    it('Should convert viable decimal number strings correctly', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('-4.1111')).toBe(-4.1111);
    expect(toNumber('0.0')).toBe(0.0);
    });
    /*
    it('Should throw an error on unviable strings', () => {
    expect(() => toNumber('a')).toThrow();
    expect(() => toNumber(null)).toThrow();
    expect(() => toNumber(true)).toThrow();
    });
    */
});
