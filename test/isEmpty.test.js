import isEmpty from '../src/isEmpty.js';

describe('isEmpty function', () => {
    it('Should consider other objects empty', () => {
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(0)).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty(Symbol())).toBe(true);
    });

    it('Should consider viable empty objects empty', () => {
        expect(isEmpty({})).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
    });

    it('Should consider viable non-empty objects not empty', () => {
        expect(isEmpty({ 'a': 1 })).toBe(false);
        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty('abc')).toBe(false);
        expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
        expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
    });

    it('Should handle array-like objects', () => {
        expect(isEmpty('string')).toBe(false);
        expect(isEmpty([undefined, null])).toBe(false);
        expect(isEmpty({ length: 0 })).toBe(false);
        expect(isEmpty({ length: 2 })).toBe(false);
    });

    it('Should handle custom objects', () => {
    class CustomObject {
        constructor() {
        this.property = 'value';
        }
    }

    expect(isEmpty(new CustomObject())).toBe(false);
    });
});
