import isDate from '../src/isDate.js';

describe('isDate function', () => {
    it('Should return true on correct Date objects', () => {
        //expect(isDate(new Date(8.64e15).toString())).toBe(true);
        expect(isDate(new Date(8.64e15))).toBe(true);
    });
});