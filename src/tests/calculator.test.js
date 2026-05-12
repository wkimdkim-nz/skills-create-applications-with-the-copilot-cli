const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(addition(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(addition(-4, -6)).toBe(-10);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test('returns a negative result', () => {
    expect(subtraction(3, 7)).toBe(-4);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });

  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  test('multiplies two negative numbers', () => {
    expect(multiplication(-2, -3)).toBe(6);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(division(7, 2)).toBe(3.5);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('modulo', () => {
  test('returns the remainder of 10 % 3', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when there is no remainder', () => {
    expect(modulo(12, 4)).toBe(0);
  });

  test('throws an error when modulo divisor is zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('power (exponentiation)', () => {
  test('raises a number to a positive power', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('raises a number to the power of zero', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to a negative power', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });
});

describe('squareRoot', () => {
  test('returns the square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns the square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135623730951);
  });

  test('returns zero for the square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('throws an error for the square root of a negative number', () => {
    expect(() => squareRoot(-4)).toThrow(
      'Square root of a negative number is not allowed'
    );
  });
});
