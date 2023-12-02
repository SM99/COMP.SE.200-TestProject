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
    
    it('Should convert binary strings correctly', () => {
        expect(toNumber('0b1101')).toBe(13);
    });

    it('Should convert hexadecimal strings correctly', () => {
        expect(toNumber('0x1a')).toBe(26);
    });
    
    it('Should return NAN on unviable strings', () => {
    expect(toNumber('a')).toBe(0 / 0); // 0 / 0 is NAN
    expect(toNumber('4a')).toBe(0 / 0);
    });  
});
