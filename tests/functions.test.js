import getFunction from "../src/functions.js";

const without = getFunction();

test("without", () => {
  const arr = [1, 2, 3, 4, 5, 1, 2, 5];
  const int1 = 1;
  const int2 = 5;
  expect(without([], int1)).toEqual([]);
  expect(without(arr, int1, int2)).toEqual([2, 3, 4, 2]);
});