import filter from '../src/filter.js';

describe('filter function', () => {
    it('Should filter array based on a predicate', () => {
        const products = [
            { 'product': 'foo', 'attribute': true },
            { 'product': 'bar',   'attribute': false },
            { 'product': 'baz',  'attribute': true }
        ];

        const trueAttributeProduct = filter(products, ({ attribute }) => attribute);
        expect(trueAttributeProduct).toEqual([{ 'product': 'foo', 'attribute': true }, { 'product': 'baz', 'attribute': true }]);
    });

    it('Should return empty array when given empty array', () => {
        const emptyArray = [];
        const result = filter(emptyArray, x => x);
        expect(result).toEqual([]);
    });

    it('Should handle non-array input', () => {
        const nonArrayInput = null;
        const result = filter(nonArrayInput, x => x);
        expect(result).toEqual([[]]);
    });

    it('Should filter mixed data types', () => {
        const mixedArray = [1, 'a', true, {foo: 'bar'}, [1, 2, 3]];
        const numbersOnly = filter(mixedArray, item => typeof item === 'number');
        expect(numbersOnly).toEqual([1]);
    });

    it('Should return new array, not modify the original', () => {
        const originalArray = [1, 2, 3];
        const newArray = filter(originalArray, number => number > 1);
        expect(newArray).not.toBe(originalArray);
        expect(newArray).toEqual([2, 3]);
    });
});
