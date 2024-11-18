function calculator(a, b = 0, operation) {
  return operation(a, b); // Make sure `operation` is a valid function
}

function add(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}

// Function expression for divide
let divide = function (x, y) {
  return x / y;
};

// Arrow function for divide2
let divide2 = (x, y) => x / y;

// Testing the functions
console.log(calculator(5, 6, add)); // Outputs: 11
console.log(calculator(5, 6, multiply)); // Outputs: 30
console.log(calculator(5, 6, divide)); // Outputs: 0.8333...
console.log(calculator(6, 3, divide2)); // Outputs: 2
