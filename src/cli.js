#!/usr/bin/env node
// CLI for calculator (supports add, subtract, multiply, divide)
const path = require('path');
const { add, subtract, multiply, divide } = require(path.join(__dirname, 'calculator'));

function usage() {
  console.error('Usage: node cli.js <operation> <num1> <num2> [...numN]');
  console.error('Operations: add, subtract, multiply, divide');
}

const [op, ...args] = process.argv.slice(2);
if (!op) {
  usage();
  process.exit(1);
}

if (args.length === 0) {
  console.error('Error: at least one numeric operand is required');
  usage();
  process.exit(1);
}

try {
  let result;
  switch (op) {
    case 'add':
      result = add(...args);
      break;
    case 'subtract':
      result = subtract(...args);
      break;
    case 'multiply':
      result = multiply(...args);
      break;
    case 'divide':
      result = divide(...args);
      break;
    default:
      console.error(`Error: unknown operation '${op}'`);
      usage();
      process.exit(1);
  }
  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
