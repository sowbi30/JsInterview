// 1. Closures and Lexical Scope
// Explanation: Understand closures and how they allow functions to retain access to their outer function's
//  scope even after the outer function has finished execution.
// function outer() {
//     let outerVar = "I am from the outer function!";
//     function inner() {
//       console.log(outerVar);
//     }
//     return inner;
//   }
  
//   let closureExample = outer();
//   closureExample(); // Outputs: I am from the outer function!

//   2. Asynchronous JavaScript: Promises
// Explanation: Explore Promises to handle asynchronous operations in a more readable and maintainable way.
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let data = "Async data";
//         if (data) {
//           resolve(data);
//         } else {
//           reject("Error fetching data");
//         }
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

//Add space
// function addSpace (str){
//     return str.split(',').join(' ');
//     }
//     let result1 = addSpace('GUVI');  //let result1 = addSpace(userInput[0]);
//     console.log(result1);
//     3. Async/Await
//     Explanation: Learn how to use async and await to write asynchronous code that resembles synchronous code, making it more readable.
    // async function fetchData() {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve("Async data");
    //       }, 2000);
    //     });
    //   }
      
    //   async function fetchDataAndLog() {
    //     let result = await fetchData();
    //     console.log(result);
    //   }
      
    //   fetchDataAndLog(); // Outputs: Async data
//       4. ES6 Modules
//       Explanation: Understand how to use ES6 modules to organize and modularize your JavaScript code.
//       // Module: math.js
// export function add(a, b) {
//     return a + b;
//   }
  
//   // Module: main.js
//   import { add } from './math.js';
  
//   console.log(add(5, 3)); // Outputs: 8
//   5. Event Handling
//   Explanation: Learn how to handle events in the browser, such as click events, and understand event propagation.
//   document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button clicked!");
//   });
//   6. AJAX and Fetch API
//   Explanation: Explore making asynchronous requests to a server using AJAX and the Fetch API.
//   fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
    
  