// To understand JavaScript coding from basic to hard levels, it's important to cover a variety of topics and concepts. I'll outline these topics and provide simple code examples to help you grasp each concept. Keep in mind that the difficulty of these topics can vary based on your prior programming experience. 

// 1. **Basic JavaScript Syntax:**
//    - Variables, Data Types, and Operators.
//    - Basic Input/Output.
//    - Conditional Statements (`if`, `else`, `switch`).

//    ```javascript
//    // Example:
//    let num1 = 5;
//    let num2 = 10;
//    let sum = num1 + num2;

//    if (sum > 10) {
//      console.log("Sum is greater than 10");
//    } else {
//      console.log("Sum is not greater than 10");
//    }
//    ```


// 2. **Functions:**
//    - Declaring and calling functions.
//    - Function parameters and return values.

//    ```javascript
//    // Example:
//    function add(a, b) {
//      return a + b;
//    }

//    let result = add(3, 7);
//    console.log(result); // Outputs 10
//    ```

// 3. **Arrays:**
//    - Creating, accessing, and manipulating arrays.
//    - Array methods.

//    ```javascript
//    // Example:
//    let fruits = ["apple", "banana", "cherry"];
//    fruits.push("date");
//    console.log(fruits); // Outputs ["apple", "banana", "cherry", "date"]
//    ```

// 4. **Objects:**
//    - Creating and working with objects.
//    - Object properties and methods.

//    ```javascript
//    // Example:
//    let person = {
//      firstName: "John",
//      lastName: "Doe",
//      greet: function() {
//        console.log(`Hello, ${this.firstName} ${this.lastName}`);
//      }
//    };

//    person.greet(); // Outputs "Hello, John Doe"
//    ```
// let details ={
//     name  sowbaranika,
//     age  32,
//     DOB 10011992,
//     School  2009,
//     college  2012
// }
// details.gender= Female;

// for (let i in details){
//     console.log(i,details[i]);
// }
// 5. **Loops:**
//    - `for` loops, `while` loops, and `forEach`.
//    - Loop control statements (`break` and `continue`).



//    ```javascript
//    // Example:
//    for (let i = 0; i < 5; i++) {
//      console.log(i);
//    }

//    let numbers = [1, 2, 3, 4, 5];
//    numbers.forEach(number => {
//      console.log(number);
//    });
//    ```

// 6. **DOM Manipulation:**
//    - Accessing and modifying HTML elements with JavaScript.
//    ```html
//    <!-- HTML -->
//    <button id="myButton">Click me</button>
//    ```
//    ```javascript
//    // JavaScript
//    const button = document.getElementById("myButton");
//    button.addEventListener("click", function() {
//      alert("Button clicked!");
//    });
//   7. **Asynchronous JavaScript:**
//    - Callbacks, Promises, and Async/Await.

//    ```javascript
//    // Example using Promises:
//    function fetchData() {
//      return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          resolve("Data fetched successfully");
//        }, 1000);
//      });
//    }

//    fetchData()
//      .then(data => console.log(data))
//      .catch(error => console.error(error));
//    ```

// 8. **Error Handling:**
//    - Try...catch for handling exceptions.

//    ```javascript
//    try {
//      // Code that might throw an error
//    } catch (error) {
//      console.error(error);
//    }

// 9. **Closures and Scopes:**
//    - Understanding how scope and closures work.

//    ```javascript
//    function outer() {
//      let outerVar = "I'm from outer!";
     
//      function inner() {
//        let innerVar = "I'm from inner!";
//        console.log(outerVar); // Access outerVar from the outer function
//      }
     
//      return inner;
//    }

//    const innerFunc = outer();
//    innerFunc(); // Access outerVar through closure
//    ```

// Certainly, let's explore these advanced JavaScript topics with code examples and explanations:

// 1. **Classes and Object-Oriented Programming:**

//    JavaScript supports object-oriented programming (OOP) using classes and objects. Here's an example:

//    ```javascript
//    // Define a class
//    class Person {
//      constructor(firstName, lastName) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//      }

//      greet() {
//        console.log(`Hello, ${this.firstName} ${this.lastName}`);
//      }
//    }

//    // Create an object
//    const person = new Person("John", "Doe");
//    person.greet(); // Outputs "Hello, John Doe"
//    ```

// 2. **Modules and Module Bundlers (e.g., ES6 Modules, Webpack):**

//    JavaScript supports modular code using ES6 Modules. Here's an example of creating and importing modules:

//    **Module 1 (math.js):**

//    ```javascript
//    export function add(a, b) {
//      return a + b;
//    }
//    ```

//    **Module 2 (app.js):**

//    ```javascript
//    import { add } from './math.js';

//    console.log(add(5, 3)); // Outputs 8
//    ```

//    Module bundlers like Webpack help bundle all your modules into a single file for deployment.

// 3. **Functional Programming (e.g., map, filter, reduce):**

//    Functional programming techniques are often used in JavaScript for data transformation. Here's an example using `map`, `filter`, and `reduce`:

//    ```javascript
//    const numbers = [1, 2, 3, 4, 5];

//    // Using map to double each number
//    const doubled = numbers.map(number => number * 2);
//    console.log(doubled); // Outputs [2, 4, 6, 8, 10]

//    // Using filter to get even numbers
//    const evens = numbers.filter(number => number % 2 === 0);
//    console.log(evens); // Outputs [2, 4]

//    // Using reduce to sum all numbers
//    const sum = numbers.reduce((acc, number) => acc + number, 0);
//    console.log(sum); // Outputs 15
//    ```

// 4. **Working with APIs (e.g., Fetch API):**

//    You can use the Fetch API to make network requests to external resources like APIs. Here's an example:

//    ```javascript
//    // Make a GET request to an API
//    fetch('https://jsonplaceholder.typicode.com/posts/1')
//      .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => console.error(error));
//    ```

// 5. **Manipulating the Document Object Model (DOM) dynamically:**

//    You can interact with the DOM to update and modify web pages. Here's an example:

//    ```html
//    <!-- HTML -->
//    <button id="myButton">Click me</button>
//    <div id="output"></div>
//    ```

//    ```javascript
//    // JavaScript
//    const button = document.getElementById("myButton");
//    const outputDiv = document.getElementById("output");

//    button.addEventListener("click", function() {
//      outputDiv.innerHTML = "Button clicked!";
//    });
//    ```

// These advanced topics in JavaScript expand your knowledge and capabilities. They're essential for building complex applications and websites. Remember to practice and experiment with these concepts in real projects to gain proficiency.
