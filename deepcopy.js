// //To create a deep copy of the array a, you can use the JSON methods JSON.stringify and JSON.parse. 
// //Here's how you can modify your code:


let a = [12, 101, 15, [12, 5]];
// console.log(JSON.stringify(a));  --- stringify this method takes a js object and then transforms it into a JSON STRING.
let b = JSON.parse(JSON.stringify(a));  //  JSON.parse() : This method takes a JSON string and then transforms it into a JAVASCRIPT OBJECT.

// a[1] = 15;
// a[3][0] = 55;

b[2]= 100;
// b[3][0]= 71;


console.log(a, b);

// // This approach converts the array a to a JSON string using JSON.stringify, and then parses that string back into a new array using JSON.
// // parse. This creates a completely new array in memory, so modifying a or b will not affect each other.

// // Keep in mind that this method has limitations. It works well for simple arrays and objects, 
// // but it may not preserve certain data types or handle circular references correctly. For more complex scenarios, 
// // you might want to consider using a specialized library like Lodash's cloneDeep or other custom deep cloning solutions.


// // Using Lodash's cloneDeep: npm install lodash) before running this code.

// const _ = require('lodash');

// let a = [12, 101, 15, [12, 5]];
// let b = _.cloneDeep(a);

// a[1] = 15;
// a[3][0] = 55;

// console.log(a, b);


// // Custom Deep Cloning Function:
// function deepClone(obj) {
//     // Base case: if the input is null or not an object, return it as is
//     if (obj === null || typeof obj !== 'object') {
//       return obj;
//     }
  
//     // Case for arrays: create a new array and deep clone each element
//     if (Array.isArray(obj)) {
//       const newArray = [];
//       for (let i = 0; i < obj.length; i++) {
//         newArray[i] = deepClone(obj[i]);
//       }
//       return newArray;
//     }
  
//     // Case for objects: create a new object and deep clone each property
//     if (typeof obj === 'object') {
//       const newObj = {};
//       for (const key in obj) {
//         // Check if the property belongs to the object and not its prototype chain
//         if (obj.hasOwnProperty(key)) {
//           newObj[key] = deepClone(obj[key]);
//         }
//       }
//       return newObj;
//     }
//   }
  
//   // Example usage
//   let a = [12, 101, 15, [12, 5]];
//   let b = deepClone(a);
  
//   // Modify the original array 'a'
//   a[1] = 15;
//   a[3][0] = 55;
  
//   // Log both the modified and cloned arrays
//   console.log(a, b);

  
// //   Here's what each part of the deepClone function does:

// // Base Case: If the input obj is null or not of type 'object' (excluding arrays), then it is a primitive value or a non-object type.
// //  In this case, we simply return the input as it is since there's no need to clone a primitive value.

// // Array Case: If the input is an array, we create a new array (newArray) and recursively call deepClone on each element of the array. 
// // This ensures that each element within the array is also deeply cloned.

// // Object Case: If the input is an object (excluding arrays),
// //  we create a new object (newObj) and iterate over each property of the input object using a for...in loop.
// //   We check obj.hasOwnProperty(key) to ensure that we only clone properties that belong directly to the object and not to its prototype chain. 
// //   For each property, we recursively call deepClone to deep clone the property value.

// // The example usage demonstrates creating an array a, deep cloning it into a new array b, modifying the original array a,
// //  and then logging both arrays to the console to show that modifications to a do not affect the cloned array b.
  
