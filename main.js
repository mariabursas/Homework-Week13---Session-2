//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

//Write a function that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function sumNumbers(...args) {
  return args
    .filter((arg) => typeof arg === "number")
    .reduce((acc, val) => acc + val, 0);
}

//Write a function that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

//Write a function that takes in any amount of arguments, and returns the sum of every other argument
function sumEveryOther(...args) {
  return args
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}

//Write a function that can take in any number of arguments, and returns an array of only the unique arguments.
function uniqueParameter(...args) {
  return [...new Set(args)];
}
//Write a function that takes in any number of arrays as arguments and combines all of them into one array.
function combineAll(...arrays) {
  return [].concat(...arrays);
}

console.log(sum(1, 2, 2, 3, 4, 6, 8, 999));
console.log(sum(0, 0, 0));
console.log(sumNumbers(1, 2, 2, 3, 4, 6, 8, 999));
console.log(sumNumbers(0, 0, 0));
console.log(combineArrays([0, 0, 0, 1, 2, 3], [2, 3, 4, 5, 6, 6]));
console.log(sumEveryOther(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(uniqueParameter(0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 999));
console.log(combineAll([0, 0, 0, 1, 2, 3], [2, 3, 4, 5, 6, 6]));
