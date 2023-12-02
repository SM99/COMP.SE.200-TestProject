import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike function', () => {
    it('Should consider normal object objectlike', () => {
        expect(isObjectLike([1,2,3])).toBe(true);
        expect(isObjectLike({})).toBe(true);
    });

    it('Should consider not objectlike things false', () => {
        expect(isObjectLike(null)).toBe(false);
        expect(isObjectLike(32)).toBe(false);
        expect(isObjectLike('abc')).toBe(false);
    });

    it('Should consider custom objects objectlike', () => {
        class CustomObject {
            constructor() {
            this.property = 'value';
            }
        }

        expect(isObjectLike(new CustomObject())).toBe(true);
        var myObj = new CustomObject();
        delete myObj.property;
        expect(isObjectLike(myObj)).toBe(true);
    });

    it('Should consider instances of built-in objects objectlike', () => {
        expect(isObjectLike(new Date())).toBe(true);
        expect(isObjectLike(new RegExp('test'))).toBe(true);
    });

    it('Should consider arrays with added properties objectlike', () => {
        const array = [1, 2, 3];
        array.customProperty = 'value';

        expect(isObjectLike(array)).toBe(true);
    });
});