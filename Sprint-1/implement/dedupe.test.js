const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/
// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("when passed an empty array, should return an empty array", () => {
    const empty = [];
    expect(dedupe(empty)).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("when passed an array with no duplicates, should return a COPY of the original array", () => {
    const noDupes = [1,2,3,4,5];
    expect(dedupe(noDupes)).toEqual(noDupes);
})

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
describe("dedupes", () => {
    const cases = [
        {input:['a','a','a','b','b','c'], expected: ['a','b','c']},
        {input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8]},
        {input:[1, 2, 1], expected: [1, 2]}
    ];

    test.each(cases)(
        "returns a deduped array: %p", ({input, expected}) => {
            expect(dedupe(input)).toEqual(expected);
        });
});
