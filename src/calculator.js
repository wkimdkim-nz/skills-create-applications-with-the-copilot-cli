/**
 * Calculator - Supports the following operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - squareRoot
 */

/**
 * Returns the sum of two numbers (addition).
 */
function addition(a, b) {
  return a + b;
}

/**
 * Returns the difference of two numbers (subtraction).
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Returns the product of two numbers (multiplication).
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Returns the quotient of two numbers (division).
 * Throws an error if dividing by zero.
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Returns the remainder of a divided by b (modulo).
 * Throws an error if dividing by zero.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Returns base raised to the exponent (power / exponentiation).
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of n.
 * Throws an error if n is negative.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
