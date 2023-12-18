// Certainly! In JavaScript, map, reduce, and filter are higher-order functions that operate on arrays. 
// They provide a concise and expressive way to perform common operations on arrays without the need for explicit loops.

// 1. map:
// The map function creates a new array by applying a given function to each element of the original array.

// Example: Squaring each element in an array
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//In modern JavaScript, you can also use arrow functions for conciseness:


const squaredNumbers1= numbers.map(num => num * num);


//2. filter:
//The filter function creates a new array containing only the elements that satisfy a given condition.

// Example: Filtering even numbers from an array
const numbers1 = [1, 2, 3, 4, 5];

const evenNumbers0 = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers0); // Output: [2, 4]

//arrow function
const evenNumbers = numbers.filter(num => num % 2 === 0);

//3. reduce:
// The reduce function applies a function to each element of the array to reduce it to a single value. 
// It can be used for various tasks, such as summing up elements or finding the maximum value.

// Example: Summing up elements in an array
const numbers2 = [1, 2, 3, 4, 5];

const sum1 = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0); // 0 is the initial value of the accumulator

console.log(sum1); // Output: 15

//Using arrow functions:
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
