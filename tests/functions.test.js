import { strict as assert } from "assert";
import getFunction from "../src/functions.js";

const indexOf = getFunction();

assert.deepEqual(indexOf([1, 2, 1, 2], 2), 1);
assert.deepEqual(indexOf([1, 2, 1, 2], 2, 2), 3);
assert.deepEqual(indexOf([1, 2, 1, 2], 10), -1);
assert.deepEqual(indexOf([0], 0), 0);

assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([1, 2, 1, 2], 10) === -1);
assert(indexOf([0], 0) === 0);

console.log("Done");
