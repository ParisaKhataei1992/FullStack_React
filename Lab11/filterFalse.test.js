const filterFalse = require('./filterFalse');

describe("Function to find false values", () => {
    test("It should search the input for objects out that contain a false value", () => {
        const input = [
            {authenticated: true, user_id: "1_hasdfk"},
            {authenticated: false, user_id: "2_jkdhg"},
            {authenticated: false, user_id: "3_ksjhf"},
            {authenticated: true, user_id: "4_dlkfgh"},
            {authenticated: true, user_id: "5_hanging"}
        ];

        const output = [
            {authenticated: true, user_id: "1_hasdfk"},
            {authenticated: true, user_id: "4_dlkfgh"},
            {authenticated: true, user_id: "5_hanging"}
        ];

        expect(filterFalse(input)).toEqual(output);
    });
});