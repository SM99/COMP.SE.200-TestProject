import map from '../src/map.js';

describe('map function', () => {
    it('Should work with transformation function', () => {
        const products = [
            { 'product': 'banana', 'price': 2 },
            { 'product': 'apple',   'price': 5 }
        ];
        const prices = map(products, product => product.price);
        expect(prices).toEqual([2, 5]);
    });

    it('Should return empty array when given empty array', () => {
        const emptyArray = [];
        const result = map(emptyArray, x => x * x);
        expect(result).toEqual([]);
    });

    it('Should handle non-array inputs', () => {
        const nonArrayInput = null;
        const result = map(nonArrayInput, x => x);
        expect(result).toEqual([]);
    });

    it('Should correctly map mixed data types', () => {
        const mixedArray = [1, 'a', true];
        const stringifiedItems = map(mixedArray, item => String(item));
        expect(stringifiedItems).toEqual(['1', 'a', 'true']);
    });

    it('Should return new array, not modify the original', () => {
        const originalArray = [1, 2, 3];
        const newArray = map(originalArray, number => number);
        expect(newArray).not.toBe(originalArray);
        expect(newArray).toEqual([1, 2, 3]);
    });
});
