const assert = require('assert');
const { add, subtract, multiply, divide } = require('../src/calculator');

try {
  // Addition
  assert.strictEqual(add(1,2,3), 6);
  assert.strictEqual(add(), 0);

  // Subtraction
  assert.strictEqual(subtract(5,3), 2);
  assert.strictEqual(subtract(5), 5);

  // Multiplication
  assert.strictEqual(multiply(2,3,4), 24);
  assert.strictEqual(multiply(), 0);

  // Division
  assert.strictEqual(divide(10,2), 5);
  assert.strictEqual(divide(5), 5);
  assert.throws(() => divide(1,0), /Division by zero/);

  console.log('All tests passed');
  process.exit(0);
} catch (err) {
  console.error('Test failed:', err && err.message ? err.message : err);
  process.exit(1);
}
