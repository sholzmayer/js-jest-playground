const { sum } = require("./example");

it("should sum 2+3", () => {
  expect(sum(2, 3)).toEqual(5);
});
