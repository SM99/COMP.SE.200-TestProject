import isDate from '../src/isDate.js';

describe('isDate function', () => {
    it('Should return true on correct Date objects', () => {
        expect(isDate(new Date(8.64e15))).toBe(true);
        expect(isDate(new Date())).toBe(true);
    });

    it('Should return false on non-Date objects', () => {
        expect(isDate('Mon April 23 2012')).toBe(false);
        expect(isDate(123456)).toBe(false);
        expect(isDate({})).toBe(false);
        expect(isDate([])).toBe(false);
        expect(isDate(null)).toBe(false);
        expect(isDate(undefined)).toBe(false);
        expect(isDate(true)).toBe(false);
        expect(isDate(false)).toBe(false);
    });

    it('Should return false on invalid Date objects', () => {
        expect(isDate(new Date('invalid date'))).toBe(false);
        expect(isDate(new Date('2023-02-30'))).toBe(false); // Date does not exist
        expect(isDate(new Date('abc'))).toBe(false);
    });

    it('Should return false on other edge cases', () => {
        expect(isDate()).toBe(false);
        expect(isDate(NaN)).toBe(false);
        expect(isDate(Infinity)).toBe(false);
        expect(isDate(-Infinity)).toBe(false);
    });
});
