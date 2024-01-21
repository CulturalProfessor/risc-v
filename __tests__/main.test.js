const { removeItems } = require("../src/task");

test("removes items correctly", () => {
  const inputList = "0 1 2 3 4 5 6 7 8 9";
  const expectedList = [0, 4, 6];
  const actualList = removeItems(inputList);
  expect(actualList).toEqual(expectedList);
});

test("throws error if list contains non-integer values", () => {
  const inputList = "0 1 2 3 4 5 6 7 8 9 a";
  expect(() => {
    removeItems(inputList);
  }).toThrow("List contains non-integer values");
});

test("throws error if list is not a multiple of 10 in length", () => {
  const inputList = "0 1 2 3 4 5 6 7 8";
  expect(() => {
    removeItems(inputList);
  }).toThrow("List is not a multiple of 10 in length");
});

test("throws error if list is empty", () => {
  const inputList = "";
  expect(() => {
    removeItems(inputList);
  }).toThrow("Input list is empty");
});
