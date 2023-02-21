import getFunction from "../src/functions.js";

const get = getFunction();

if (get({ key: "value" }, "key") !== "value") {
  throw new Error("Fail!");
}
if (get({}, "key", "value") !== "value") {
  throw new Error("Fail!");
}
if (get({ key: "value" }, "key", "default value") !== "value") {
  throw new Error("Fail!");
}

console.log("Done!!!");
