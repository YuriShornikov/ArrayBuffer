import getBuffer from "../getBuffer";

describe('test getBuffer', () => {
    test('return buffer', () => {
        const buffer = getBuffer();
        const expectedContent = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
        const bufferView = new Uint16Array(buffer);
        const resultString = String.fromCharCode(...bufferView);
        expect(resultString).toBe(expectedContent);
    })
})