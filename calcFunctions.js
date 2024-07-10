// check if both arguments are numbers
const areNums = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return true;
};

// add, subtract, multiply, divide functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Cannot divide by zero" : a / b);

// calc function w/ check for numbers
const calc = (fn, a, b) => {
  areNums(a, b);
  return fn(a, b);
};

// throws error when both args !numbers
console.log(calc(add, 4, 10));
// doesn't throw error
console.log(add(4, "10"));
