import words from '../src/words.js';

describe('words function', () => {
    it('Should split standard strings into words correctly', () => {
        expect(words('potato, tomato, & apple')).toEqual(['potato', 'tomato', 'apple']);
    });

    it('Should split strings based on a custom pattern', () => {
        expect(words('potato, tomato, & apple', /[^, ]+/g)).toEqual(['potato', 'tomato', '&', 'apple']);
    });

    it('Should return an empty array for an empty string', () => {
        expect(words('')).toEqual([]);
    });

    it('Should correctly handle numeric strings', () => {
        expect(words('123 456')).toEqual(['123', '456']);
    });

    it('Should correctly handle alphanumeric strings', () => {
        expect(words('abc123 456xyz')).toEqual(['abc123', '456xyz']);
    });

    it('Should exclude special characters when splitting words', () => {
        expect(words('hello! world?')).toEqual(['hello', 'world']);
    });

    it('Should handle non-string inputs', () => {
        expect(words(null)).toEqual([]);
        expect(words(undefined)).toEqual([]);
        expect(words(123)).toEqual([]);
    });

    it('Should return empty array for strings with only special characters', () => {
        expect(words('!@#$%^&*()')).toEqual([]);
    });

    it('Should not modify the original string', () => {
        const originalString = 'potato, tomato, & apple';
        words(originalString);
        expect(originalString).toBe('potato, tomato, & apple');
    });
});
