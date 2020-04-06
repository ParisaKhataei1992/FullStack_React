const removeVowels = require('./removeVowels');

describe("Function to remove vowels", () => {
    test("It should search the input for vowels and remove them", () => {
        const input = "A dog is a friendly pet if it’s trained properly";

        const output = " dg s  frndl pt f t’s trnd prprl";
        expect(removeVowels(input)).toEqual(output);
    });
});
