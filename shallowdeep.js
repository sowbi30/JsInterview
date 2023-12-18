

// // Shallow Copy:
// // In JavaScript, a simple way to create a shallow copy of an array or an object is to use the spread (...) operator or Object.
// // assign() method. Here's an example with an array:
// // Shallow copy of an array
let originalArray = [1, [2, 3], 4];
let shallow = originalArray;

// Modify the shallow copy
shallow[1][0] = 99;

// Changes are reflected in the original
console.log(originalArray);       // Output: [1, [99, 3], 4]
console.log(shallow);    // Output: [1, [99, 3], 4]

// 2. Shallow Copy of an Object using Spread Operator: mutation:
//Difference:
// In the first example, a deep copy of the nested structure is created using the spread operator for both the outer and nested objects, 
// preventing changes from affecting the original object.

// In the second example, a shallow copy is created using the spread operator only for the outer object. 
// Changes to the nested structure are shared between the original and shallow copy because the nested object is not deeply copied.

// In summary, when using the spread operator for shallow copying, nested structures are not deeply copied, 
// and changes to the nested structure are reflected in both the original and the shallow copy.

let originalObject = { a: 1, b: { c: 2, d: 3 } };

// Shallow copy of an object
let shallowCopyObject = { ...originalObject };

// Modify the shallow copy
shallowCopyObject.b.c = 99;

// Changes are reflected in the original
console.log(originalObject);        // Output: { a: 1, b: { c: 99, d: 3 } }
console.log(shallowCopyObject);     // Output: { a: 1, b: { c: 99, d: 3 } }


// another objecy method:

// let obj={
//     name:"santhosh",
//     age:{
//         value:23
//     }
// }

// let obj1={...obj,age:{...obj.age}}

// obj.age.value++

// console.log(obj,obj1)

//{ name: 'santhosh', age: { value: 24 } } { name: 'santhosh', age: { value: 23 } }

// // @ Deep Copy:
// // Deep Copy of an Object using Lodash:

// // const _ = require('lodash');

// // let originalObject = { a: 1, b: { c: 2, d: 3 } };

// // // Deep copy of an object using Lodash
// // let deepCopyObject = _.cloneDeep(originalObject);

// // // Modify the deep copy
// // deepCopyObject.b.c = 99;

// // // Changes are NOT reflected in the original
// // console.log(originalObject);        // Output: { a: 1, b: { c: 2, d: 3 } }
// // console.log(deepCopyObject);        // Output: { a: 1, b: { c: 99, d: 3 } }

// // Deep Copy of an Array using a Recursive Function:

// // function deepCopyArray(arr) {
// //     return arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);
// // }

// // let originalArray = [1, [2, 3], 4];

// // // Deep copy of an array
// // let deepCopyArray = deepCopyArray(originalArray);

// // // Modify the deep copy
// // deepCopyArray[1][0] = 99;

// // // Changes are NOT reflected in the original
// // console.log(originalArray);        // Output: [1, [2, 3], 4]
// // console.log(deepCopyArray);        // Output: [1, [99, 3], 4]


// // Deep Copy:
// // Creating a deep copy in JavaScript often involves using a recursive function or an external library like Lodash. 
// // Here's an example using a recursive function for an array

// // In this example, the deepCopyArray function recursively creates a new array,
// //  ensuring that changes to nested arrays do not affect the original array.

// // Keep in mind that when dealing with objects, the same principles apply, but you would use similar techniques with the Object.
// // assign() method or the spread operator for shallow copies, and a custom deep copy function for deep copies.