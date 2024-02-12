import ArrayBufferConverter from "../arrayBuffer";
import getBuffer from "../getBuffer";

describe('test arrayBuffer', () => {
    let array;

    beforeEach(() => {
        array = new ArrayBufferConverter();
    });
    
    test('correct load', () => {
        const buffer = getBuffer();
        const arrayLoad = array.load(buffer);
        expect(arrayLoad).toBeTruthy();
    })
    test('correct convert to string', () => {
        const buffer = getBuffer();
        array.load(buffer);
        const result = array.toString();
        const expected = {
            user: {
            id: 1,
            name: 'Hitman',
            level: 10,
            }
        }
        expect(result).toEqual(expected);
    })
    test('toString without buffer', () => {
        expect(() => array.toString()).toThrow('No buffer');
    })
})