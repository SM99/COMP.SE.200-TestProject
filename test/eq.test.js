import eq from '../src/eq.js';

describe('Eq function', () => {
    it('Should consider same values equal', () => {
        expect(eq('abc', 'abc')).toBe(true);
        expect(eq(987, 987)).toBe(true);
        expect(eq(true, true)).toBe(true);
        expect(eq(null, null)).toBe(true);
    });

    it('Should consider unequal values unequal', () => {
        expect(eq('abcd', 'abc')).toBe(false);
        expect(eq(9876, 987)).toBe(false);
        expect(eq(false, true)).toBe(false);
        expect(eq('', null)).toBe(false);
    });
    
    it('Should consider different types unequal', () => {
        expect(eq('123', 123)).toBe(false);
        expect(eq(0, '0')).toBe(false);
        expect(eq(true, 1)).toBe(false);
        expect(eq(null, undefined)).toBe(false);
    });

    it('Should consider objects with same values but different references equal', () => {
        const object1 = { key: 'value' };
        const object2 = { key: 'value' };

        expect(eq(object1, object1)).toBe(true);
        expect(eq(object1, object2)).toBe(false);
    });

    it('Should consider NaN values equal', () => {
        expect(eq(NaN, NaN)).toBe(true);
        expect(eq(0 / 0, NaN)).toBe(true);
        expect(eq('abc', NaN)).toBe(false);
    });

    it('Should consider positive and negative zero equal', () => {
        expect(eq(0, -0)).toBe(true);
        expect(eq(0, 0)).toBe(true);
        expect(eq(-0, -0)).toBe(true);
        expect(eq(-0, 0)).toBe(true);
        expect(eq(0, '0')).toBe(false);
    });
});