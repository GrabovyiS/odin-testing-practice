const capitalize = require('./capitalize');

test('Function exists', () => {
  expect(typeof capitalize === 'function').toBe(true);
});

test('Capitalizes first letter', () => {
  expect(capitalize('bob')).toBe('Bob');
});

test('Does nothing with empty strings', () => {
  expect(capitalize('')).toBe('');
});

test('Does nothing to non-alphabetical chars', () => {
  expect(capitalize('1abcd')).toBe('1abcd');
});
