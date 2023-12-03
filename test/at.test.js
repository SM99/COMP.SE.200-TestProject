import at from '../src/at.js';

describe('at function', () => {
    it('Should access properties from object correctly', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
    });

    it('Should handle nested arrays and objects', () => {
        const complexObject = { 'x': { 'y': [{ 'z': 5 }, 6] }, 'a': 1 };
        expect(at(complexObject, ['x.y[0].z', 'x.y[1]', 'a'])).toEqual([5, 6, 1]);
    });

    it('Should return undefined for invalid or non-existent paths', () => {
        const object = { 'a': 1, 'b': { 'c': 2 } };
        expect(at(object, ['a', 'b.d', 'c'])).toEqual([1, undefined, undefined]);
    });

    it('Should return an array of undefined for an empty object', () => {
        const emptyObject = {};
        expect(at(emptyObject, ['a', 'b'])).toEqual([undefined, undefined]);
    });

    it('Should handle non-object inputs gracefully', () => {
        expect(at(null, ['a'])).toEqual([undefined]);
        expect(at(undefined, ['a'])).toEqual([undefined]);
        expect(at(123, ['a'])).toEqual([undefined]);
    });

    it('Should support single string path without using array', () => {
        const object = { 'a': 1, 'b': 2 };
        expect(at(object, 'a')).toEqual([1]);
        expect(at(object, 'b')).toEqual([2]);
    });

    it('Should not modify the original object', () => {
        const originalObject = { 'a': 1, 'b': 2 };
        at(originalObject, ['a']);
        expect(originalObject).toEqual({ 'a': 1, 'b': 2 });
    });

});
