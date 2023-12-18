// JavaScript Frequently asked interview questions 
// What are the different data types present in JavaScript? 


// 1. Data Types in JavaScript:
// JavaScript has several data types, including:

// Primitive Data Types:

// String: Represents textual data. Example: "Hello, World!".
// Number: Represents numeric values. Example: 42.
// Boolean: Represents either true or false.
// Undefined: Represents an uninitialized variable. Example: let x;.
// Null: Represents the absence of any object value. Example: let y = null.
// Non-primitive Data Types:

// Object: Represents a collection of key-value pairs. Example: { name: "John", age: 25 }.
// Array: Represents an ordered list of values. Example: let numbers = [1, 2, 3].

// 2.Explain Hoisting in JavaScript. 
//  Hoisting in JavaScript:
// Hoisting is a JavaScript mechanism where variable and function declarations 
// are moved to the top of their containing scope during the compilation phase.

// Example:
// console.log(x); // Outputs: undefined
// var x = 5;
// console.log(x); // Outputs: 5
// In the above example, even though x is logged before its declaration, it doesn't throw an error because of hoisting.
//  The declaration is moved to the top, and the variable is initialized with undefined.

// 3.Why do we use the word “debugger” in JavaScript? 
// Use of "debugger" in JavaScript:
// The debugger statement in JavaScript is used to invoke any available debugging functionality, like setting breakpoints. 
// When encountered, it pauses the execution of JavaScript and launches the debugging tools.

// Example:
// function example() {
//     let x = 10;
//     debugger; // Code execution pauses here
//     console.log(x);
//   }
  
//   example();

// 4.Difference between “ == “ and “ === “ operators

// Difference between "==" and "===" operators:
// == (Equality): Performs type coercion if the operands are of different types.
// === (Strict Equality): Compares both value and type without type coercion.
// Example:
// "5" == 5;  // true (coercion: string "5" becomes a number)
// "5" === 5; // false (strict comparison: string is not equal to number)

// 5.Difference between var, const and let keyword in JavaScript. 
// Difference between var, const, and let in JavaScript:
// var: Function-scoped, can be redeclared and reassigned.
// const: Block-scoped, cannot be reassigned, but the object it points to can be mutated.
// let: Block-scoped, can be reassigned.
// Example:
// var a = 1;
// let b = 2;
// const c = 3;

// a = 4; // Valid
// b = 5; // Valid
// // c = 6; // Invalid - const cannot be reassigned

// 6.Explain Implicit Type Coercion in JavaScript. 
// Implicit Type Coercion in JavaScript:
// Implicit type coercion is the automatic conversion of values from one data type to another by the JavaScript engine.

// Example:
// let result = 5 + "5"; // "55" (number 5 is coerced to string and concatenated)

// 7.Is JavaScript a statically typed or a dynamically typed language? 
// JavaScript as a statically or dynamically typed language:
// JavaScript is a dynamically typed language. This means that the data type of a variable is interpreted at runtime.

// 8.NaN Property in JavaScript:
// NaN stands for "Not a Number" and is a special value returned by certain arithmetic operations.
// ex:
// let result = "Hello" / 2; // NaN (division of a string by a number)

// 9.Explain passed by value and passed by reference. 
// Passed by Value and Passed by Reference:
// Passed by Value: Primitive types are passed by value, meaning a copy of the value is passed.
// Passed by Reference: Objects (including arrays) are passed by reference, meaning a reference to the object is passed.
// Example:
// // Passed by Value
// let a = 5;
// let b = a;
// b = 10;
// console.log(a); // 5 (unchanged)

// // Passed by Reference
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1); // [1, 2, 3, 4] (both arrays are modified)

// 10. Immediately Invoked Function in JavaScript:
// An Immediately Invoked Function Expression (IIFE) is a function that is defined and executed immediately after its creation.

// Example:
// (function() {
//     console.log("I am an IIFE!");
//   })();
  
//   // Another example with parameters
//   let result = (function(a, b) {
//     return a + b;
//   })(2, 3);
  
//   console.log(result); // 5
  





  