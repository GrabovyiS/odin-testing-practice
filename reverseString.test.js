const reverseString = require('./reverseString');

test('Function exists', () => {
  expect(typeof reverseString === 'function').toBe(true);
});

test('Reverses a string', () => {
  expect(reverseString('bobala')).toBe('alabob');
});

test('Does nothing to an empty string', () => {
  expect(reverseString('')).toBe('');
});
