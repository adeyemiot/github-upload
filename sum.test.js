const sum = require('./sum');

test('adds 1 + 5 to equal 7', () => {
  expect(sum(1, 2)).toBe(3);
});