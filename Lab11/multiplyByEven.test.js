const multiplyByEven = require('./multiplyByEven');

describe("Function to multiply every odd integer by the previous even element", () => {
    test("It should return a new array containing the elements which were multiplied previously", () => {
        const input = [ 2, 33, 4, 41, 6, 9, 77, 11, 13, 27 ];

        const output = [ 66, 164, 54, 462, 66, 78, 162 ];

        expect(multiplyByEven(input)).toEqual(output);
    });
});