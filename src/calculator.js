/**
 * Calculator module
 * Supported operations:
 * - add: addition of two or more numbers
 * - subtract: subtraction; subtracts each subsequent number from the first
 * - multiply: multiplication of two or more numbers
 * - divide: division; divides sequentially and errors on division by zero
 */

function toNumber(n) {
  const x = Number(n);
  if (Number.isNaN(x)) throw new Error(`Invalid number: ${n}`);
  return x;
}

function add(...nums) {
  if (nums.length === 0) return 0;
  return nums.map(toNumber).reduce((a, b) => a + b, 0);
}

function subtract(...nums) {
  if (nums.length < 1) throw new Error('subtract requires at least one operand');
  const [first, ...rest] = nums.map(toNumber);
  if (rest.length === 0) return first;
  return rest.reduce((acc, n) => acc - n, first);
}

function multiply(...nums) {
  if (nums.length === 0) return 0;
  return nums.map(toNumber).reduce((a, b) => a * b, 1);
}

function divide(...nums) {
  if (nums.length < 1) throw new Error('divide requires at least one operand');
  const [first, ...rest] = nums.map(toNumber);
  if (rest.length === 0) return first;
  return rest.reduce((acc, n) => {
    if (n === 0) throw new Error('Division by zero');
    return acc / n;
  }, first);
}

module.exports = { add, subtract, multiply, divide };
