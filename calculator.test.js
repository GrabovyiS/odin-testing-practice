const calculator = require('./calculator');

test('Calculator adds positive numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1, 5)).toBe(6);
});

test('Calculator adds negative numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
  expect(calculator.add(-1, -5)).toBe(-6);
});

test('Calculator subtracts positive numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('Calculator subtracts negative numbers', () => {
  expect(calculator.subtract(1, -2)).toBe(3);
  expect(calculator.subtract(3, -5)).toBe(8);
});

test('Calculator multiplies positive numbers', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('Calculator multiplies with negative numbers', () => {
  expect(calculator.multiply(3, -5)).toBe(-15);
  expect(calculator.multiply(-3, -5)).toBe(15);
});

test('Calculator divides positive numbers', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('Calculator divides with negative numbers', () => {
  expect(calculator.divide(20, -5)).toBe(-4);
  expect(calculator.divide(-20, -5)).toBe(4);
});

test('Calculator divides resulting in decimal numbers', () => {
  expect(calculator.divide(15, 10)).toBeCloseTo(1.5, 5);
});
