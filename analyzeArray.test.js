const analyzeArray = require('./analyzeArray');

test('Function exists', () => {
  expect(typeof analyzeArray).toBe('function');
});

test('Function returns an object', () => {
  expect(typeof analyzeArray([1])).toBe('object');
});

test('Works with an empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test('Gets correct average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Gets correct minimal element', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Gets correct max element', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Gets correct length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
