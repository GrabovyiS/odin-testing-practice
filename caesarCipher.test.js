const caesarCipher = require('./caesarCipher');

test('Function exists', () => {
  expect(typeof caesarCipher).toBe('function');
});

test('Works', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('Works without a key', () => {
  expect(caesarCipher('hi')).toBe('hi');
});

test('Works with keys > 26', () => {
  expect(caesarCipher('hi', 27)).toBe('ij');
});

test('Wraps letters at the and of the alphabet', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Keeps case', () => {
  expect(caesarCipher('heLLo', 3)).toBe('khOOr');
});

test('Ignores non-alphabetical chars', () => {
  expect(caesarCipher('123 !')).toBe('123 !');
});

test('Works with non-alphabetical chars in the string', () => {
  expect(caesarCipher('123 hello !', 3)).toBe('123 khoor !');
});
