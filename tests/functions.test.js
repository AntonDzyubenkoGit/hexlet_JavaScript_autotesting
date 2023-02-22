import reverse from "../src/functions.js";

test("reverse", () => {
  const str = "hello";
  expect(reverse(str)).toEqual("olleh");
  expect(reverse("")).toEqual("");
});


// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
