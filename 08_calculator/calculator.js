const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => { return sum + number }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, number) => product * number);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let factorial = 1;
  for (let i=1; i<=a; i++) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
