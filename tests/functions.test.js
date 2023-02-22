import getFunction from '../src/functions.js';

const gt = getFunction();

test("gt", () => {
  expect(gt(1, 3)).toBeFalsy();
  expect(gt(3, 3)).toBeFalsy();
  expect(gt()).toBeFalsy();
  expect(gt(4, 3)).toBeTruthy();
});
