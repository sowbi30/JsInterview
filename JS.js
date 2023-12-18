// // Day 1 - Codekata

// // Programming:
// //             Machine understandable language,
// //             To give instructions to the computer,
// //             Reduce human effort.
            
// // Variables:

// // Values => You can store different things!
  
// //   Strings => "Fruits"
// //   Numbers => 1234

// // Example:

// // var          fruits             =              "apple";
// //  |             |                                  |
// // variable    variable name                        value

// // var toys = "remote control car"; -> string
// // var noOfToys = 1; -> Number


// // Task:

// // variable,
// // variable name - batch
// // value - number

// // Example:

// // var name = "Joe";
// // var batch = "B52WD Tamil";
// // var placed = "He is placed at Google";

// // console.log(batch);

// // Variable Types:
// // 1. Strings
// // 2. Numbers

// // Change Number To String:
// // var age = 15;
// // var ageString = age.toString();
// // console.log(ageString); -> "15"


// // String:

// // => length
// // => toUpperCase(), toLowerCase();
// // => CharAt()
// // => substrings()
// // => split()
// // => indexOf()
// // => replace()
// // => trim()

// // 1. length - returns the number of character is a string.
// // Example:
// //         var fruits = "Orange";
// //         console.log(fruits.length);

// // Example:
// // var fruits = "Apple is a tasty fruit";
// // console.log(fruits.length);

// // // "Apple" -> word
// // // "Apple is a fruit" -> sentance
        
// // 2. toUpperCase() & toLowerCase(): Convert a string to uppercase or lowercase
// // Example:
// // var fruits = "Apple is a tasty fruit";
// // console.log(fruits.toUpperCase());

// // var fruits = "APPLE IS A TASTY FRUIT";
// // console.log(fruits.toLowerCase());

// // -------------------------------------------------------------------------------------

// // Day 2 - Codekata

// // 3. CharAt(): returns the character at a specified index in a string.
// // Example:
// //         "t r a i n s" -> position
// //          0 1 2 3 4 5

// // Example:
// // var fruits = "Mango";
// // console.log(fruits.charAt(3));

// // 4. substring(): extract a position of a string between two specified index.
// // Example:
// // var toys = "train"
// // console.log(toys.substring(2,4));

// // * Array
// // var name = "Joe"
// // var age = 5;

// // var person = ["Joe", 5];
// // console.log(person[0]);

// // 5. split(): split is a string into an array of substring based on specified separator.

// // "Hello, world"

// // Example:
// // var myString = "Hello, world";
// // var myArray = myString.split(",");
// // console.log(myArray);

// // 6.indexOf(): returns the index of the first occurance of the special value in a string.
// // Example:
// // var myString = "Name";
// // console.log(myString.indexOf("m"));

// // * index value:
// //   N a m e
// //   0 1 2 3

// // 7. replace(): replace a specified value with a new value.
// // Example:
// // var myString = "Nume";
// // var newStr = myString.replace("u","a");
// // console.log(newStr);

// // 8.trim(): removes whitespace from both end of a string.
// // Example: Its work your homework.

// // Boolean: True/False
// // Example:
// // var age = 8;
// // console.log(age>9);

// // if:
// //    Syntax:
// //           if(condition){
// //             //Code to be executed when the condition is true
// //           }

// // Example:
// // var x = 4;
// // if(x % 2 == 0){
// //     console.log("Even");
// // }else {
// //     console.log("Odd");
// // }

// // Example:
// // == - Only check values
// // === - both values and type

// // Example:
// // var x = 0;
// // var y = "0";
// // console.log(x===y);

// // ------------------------------------------------------------

// // Day 3 - Codekata

// // Example:
// // var x = 0;
// // var y = "3-3";
// // var z = "0";

// // if(x===y){
// //     console.log("First Condition");
// // }
// // else if(x===z){
// //     console.log("Second Condition");
// // }
// // else if(x==y){
// //     console.log("Third Condition");
// // }
// // else{
// //     console.log("Game Over");
// // }

// // Switch Case: it basically act like a switchboard checks for input against predefined cases.

// // Syntax:
// //        switch(variable tobe checked){
// //          case value1:
// //            //code to be executed when variable tobe checked matches
// //            break;
// //          case value2:
// //            //code to be executed when variable tobe checked matches
// //            break;
// //          default:
// //            //
// //        }

// // Example:

// // var category = "kids";
// // switch(category){
// //     case "men":
// //         console.log("Go To Heaven");
// //         break;
// //         case "women":
// //             console.log("Go To World");
// //             break;
// //             case "kids":
// //                 console.log("Go to School");
// //                 break;
// //                 default:
// //                 console.log("World Closed");
// // }

// // 1. For loop: set of instructions that you follow over and over again until you are done.

// // Example:
// //  Box
// //   |
// //  Toys 1....10

// // Syntax:
// //              toy1           toy10      t1, t2, t3...t10
// //        for(initialization; condition; updating ){
// //          //code
// //        }

// // Example:
// // var toys = ["ball", "car", "doll", "train", "puzzle"];
// // console.log("Playing with toys using a for loop");
// // for(var i=0; i<toys.length; i++){
// //     console.log("Playing with toys", toys[i]);
// // }
// // console.log("Play time over");

// // Visualize code: https://pythontutor.com/render.html#mode=display

// // Task: Add Student Names more than 5 and try to print each name using for loop(5mins time)

// // -------------------------------------------------------------------------------------

// // Day 4 - Codekata 

// // While loop: following set of instructions until a certain condition met.

// // Syntax:
// //       while(condition){
// //         //Body along with statement terminating at same point
// //       }

// // Example:
// //        condition = "Battery empty"

// // Example:
// // var batteryLevel = 5;
// // console.log("Playing w	
            
// //             +
// //             ith a Remote Control Car");
// // while(batteryLevel > 0){
// //     console.log("Playing with a toy car");
// //     batteryLevel--;
// // }
// // console.log("The toy car battery is Empty!!!");

// // Task: ["John", 52, "FSD", "Guvi"] - print these values using any loops.

// // Array Methods: ["guvi", "thiru", "b52wd tamil"]

// // 1. Push(): this method adds one or more element to the end of an array.

// // 2. Pop(): this method removes at the last element from an array.

// // 3. unshift(): this method add one or more element to the begining of an array.

// // 4. shift(): this method removes the first element from an array.

// // Example:

// // var toys = ["Ball", "JCB", "car", "doll"];
// // console.log(toys);

// // toys[3] = "train";
// // console.log(toys);

// // //Push
// // toys.push("Bus");
// // console.log(toys);

// // //Unshift
// // toys.unshift("puzzle");
// // console.log(toys);

// // //Pop
// // toys.pop();
// // console.log(toys);

// // //Shift
// // toys.shift();
// // console.log(toys);

// // Task: ["Joe", "B52WD Tamil", "GUVI"] - add "FSD"

// // Object: 
// //       * object is like a container that holds different property.
// //       * object store their element as a key-value pairs,each key value pair is termed as property.
      
// // car - color, material, how many wheels, engine type, milege.

// // var car1 = ["white", "fibre", 4, "petrol", 20];
// // var car2 = ["black", "plastic", 4, "disel", 30];

// // Array [] / Object {}

// // var car = {
// //   key      value
// //    |        |
// //   color: "white",
// //   material: "fibre",
// //   wheels: 4,
// //   milege: 20
// // }

// // Task: bike = color, milege, wheels, brand (or) student details (or) aadhar details.

// // -----------------------------------------------------------------------------------------------
  
// //   Day 5 - Codekata

// // Codekata Template:

// // // Getting input via STDIN
// // const readline = require("readline");

// // const inp = readline.createInterface({
// //   input: process.stdin
// // });

// // const userInput = [];

// // inp.on("line", (data) => {
// //   userInput.push(data);
// // });

// // inp.on("close", () => {
// //   //start-here
// //   //Your code goes here … replace the below line with your code logic 

// //   console.log(userInput);

// //   //end-here
// // });

// // Task 1:

// // // Sample input 
// // // 2
// // // 3

// // // Sample Output
// // // 2
// // // 3

// // Example:

// // // Getting input via STDIN
// // const readline = require("readline");

// // const inp = readline.createInterface({
// //   input: process.stdin
// // });

// // const userInput = [];

// // inp.on("line", (data) => {
// //   userInput.push(data);
// // });

// // inp.on("close", () => {
// //   //start-here
// //   //Your code goes here … replace the below line with your code logic 

// //   var a = (userInput[0]);
// //   var b = (userInput[1])
// //   console.log(a, b);

// // // Sample input 
// // // 2
// // // 3

// // // Sample Output
// // // 2
// // // 3

// //   //end-here
// // });


// // Task 2:

// // Sample Input:
// // 34
// // Sample Output:
// // Fail

// // Example:
// // // Getting input via STDIN
// // const readline = require("readline");

// // const inp = readline.createInterface({
// //   input: process.stdin
// // });

// // const userInput = [];

// // inp.on("line", (data) => {
// //   userInput.push(data);
// // });

// // inp.on("close", () => {
// //   //start-here
// //   //Your code goes here … replace the below line with your code logic 
  
// // var marks = parseInt(userInput[0])
// // if(marks >= 35){
// //     console.log("Pass!!...Enjoy")
// // }
// // else{
// //     console.log("Fail..Don't be Sad!!")
// // }


// //   //end-here
// // });

// // Task 3:

// // Sample Input:
// // 1
// // 1

// // Sample Output:
// // 2

// // Example:
// // // Getting input via STDIN
// // const readline = require("readline");

// // const inp = readline.createInterface({
// //   input: process.stdin
// // });

// // const userInput = [];

// // inp.on("line", (data) => {
// //   userInput.push(data);
// // });

// // inp.on("close", () => {
// //   //start-here
// //   //Your code goes here … replace the below line with your code logic 
  
// // var a = parseInt(userInput[0]);
// // var b = parseInt(userInput[1]);
// // var total = (a+b);
// // console.log(total);


// //   //end-here
// // });


// // Task 4:

// // Sample Input:
// // 2
// // 4
// // 5

// // Sample Output:
// // 2 4 5

// // // Getting input via STDIN
// // const readline = require("readline");

// // const inp = readline.createInterface({
// //   input: process.stdin
// // });

// // const userInput = [];

// // inp.on("line", (data) => {
// //   userInput.push(data);
// // });

// // inp.on("close", () => {
// //   //start-here
// //   //Your code goes here … replace the below line with your code logic 
  
// // let a; let b; let c;
// // a = userInput[0];
// // b = userInput[1];
// // c = userInput[2];
// // console.log(a, b, c);


// //   //end-here
// // });
// // ***************************************************************************************************

// // // Primitive data types
// // // In built data types
// // // String, Number, Boolean
// // // Number: includes decimal
// // // String: Characters
// // // Boolean : Boolean data type

// // //Complex Data Types:
// // // Array and Object
// // var arr = [12,13,14,15];
// // console.log(arr.length);
// // arr[100]=32;
// // console.log(arr.length);
// // //Array name is called as the starting address of a array.

// // //1. K:V pair
// // //2. Async

// // //Objects:
// // //1. Objects are a structure of Key:Value pair
// // //Syntax: var objName = {KeyName: value};
// // // array is a linear structure

// // Task: 1

// // Object: name,age,year,address

// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // //Object name is also called as the reference name.
// // //Object don't have indexes.

// // //Accessing the element inside the object
// // //we can access the elements of the object using keyname.
// // //2 types of accessing
// // //1 step: DOT method (.)
// // //Syntax: objectName.keyName
// // console.log(studentName.age);
// // //2 step: Box Method
// // //Syntax: objName["keyname"];
// // console.log(studentName["age"]);
// // //Without key we don't have values.
// // //Applicable in looping
// // //Printing the Objects
// // //for-in loop
// // //It is applicable only for objects
// // //exception: even for array too
// // //Syntax: for(var key in objName){//Code}
// // //It is a Uni-direction(only forward)
// // //It uses box method for the printing of elements.
// // for(var a in studentName){
// //   console.log(a);
// // }

// // Task 2
// // // Create a object of your name with details
// // // such as your firstname, middlename, lastname.
// // // print all the values using loop statements.


// // //Insertion
// // //Here a new K:V pair will be added at the end of the line
// // //Syntax: objName.keyName = value;
// // // I need to add gender

// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // //gender - //Syntax: objName.keyName = value;
// // studentName.gender = "male";
// // console.log(studentName);

// // Task: 3
// // //add a new key pair called attendance: ["mon", "tues", "wed"];
// // //and print the attendance in line by line
// // //mon
// // //tues
// // //wed

// // //Updation
// // //it will be applicable for key which is already present
// // //Syntax: objName.keyName = value;

// // Example:
// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // studentName.age = 15;
// // console.log(studentName);

// // //Deletion
// // //Syntax:

// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // delete studentName.year;
// // console.log(studentName);

// // //JSON: Javascript Object Notation
// // var studName = {
// //   "name": "joe",
// //   "age": "32",
// //   "year" : "2012"
// // }

// // //It looks similar to an object but Not the object.

// // //Copy by value and copy by reference
// // //Copy by value
// // var a = 23;
// // var b = a;
// // a = 24;
// // a = 876;
// // console.log(a, b);
// // Output: 876, 23
// // //Copy by Reference
// // //it is applicable for the complex data types
// // //A single array/object can have multiple references
// // var res = [1214, 123];
// // var res = [26, 27];
// // var arr = res;
// // arr[0]=12;
// // console.log(res);
// // Output: [ 12, 27 ]

// // //Array of JSON
// // //API - Application Programming Interface

// // var arr = [{"name": "john",
// //             "age" : "23"},
// //            {"name": "joe",
// //             "age": "24"}];
// //   console.log(arr[0].name);

// // Output: john

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// // </head>
// // <body>
    
// // </body>
// // </html>

// // // XML - HTTP REQUEST: it is used to interact with servers via API.
// // //Why: to get the data from the server via API.

// // //Step 01: Create a XHR Objects
// // //var variableName: userdefined your choice
// // var request = new XMLHttpRequest();
// // //Step 02: Specifiy the API
// // request.open("GET", "https://restcountries.com/v2/all");
// // //Step 03: Sending the request
// // request.send();
// // //Step 04: Once the requested data is there in server once data is successfully loaded,
// // //Server response will be of 200 status code.
// // //Functions: they are used to perform specific task.
// // request.onload=function(){
// //     var result = JSON.parse(request.response);
// //     console.log(result);
// //     //whatever conversion has to be done here only
// //     //not outside
// // }

// // //inside the func: we are converting the
// // // data from server to the client
// // //which is in string -> object.

// // //Funtion
// // function mul(a, b){
// //   return a * b;
// // }
// // console.log(mul(2,2));

// // TAKE AWAY POINTS:
// // //Copy by value and copy by reference
// // //API
// // //XML
// // //JSON
// // //XMLHTTP - FETCH
// // //ONLOAD
// // //FUNCTION
// // //REST COUNTRIES
// // -----------------------------------------------------------------------------------------------------
// // Day - 5

// // //Anonymous Function
// // //Syntax: var functionName = function(){return};
// // //here function is stored in the varibale
// // //use cases: for most of the events.
// // Example:
// // var add = function(a,b){
// //   return a + b;
// // }
// // console.log(add(5,5));

// // //Arrow Function
// // //Es6 version
// // //to reduce the code length
// // //Syntax: var variableName=(parameter)=>{};
// // Example:
// // var multi = (a,b) => {
// //   return a*b;
// // };
// // console.log(multi(2,2));
// // Example:
// // var text = () => {
// //   console.log("Hello world");
// // }
// // text();
// // //having single statement
// // //return is not needed here when you have single statement
// // //if you have multiple statement inside the function use the return statement.

// // //IIFE
// // //Immediately Invoked function execution.
// // //Syntax: (function FuncName(){})();
// // //Limited memory space
// // Example:
// // (function foo(a,b){
// //   console.log(a*b);
// // })(12,13);

// // //let and const it is called as block scoped variable.
// // //var is a global and functional scope.
// // //const: constant value
// // // const pi = 3.14142;
// // Example:
// // let a = 32;
// // if(true){
// //   let a = 23;
// //   console.log(a);
// // }
// // console.log(a);

// // //ES6 Spread Operator
// // //Syntax: ...
// // //Application: expanding the array
// // //it is applicable of string or an array.
// // let arr = ["hello", "world"];
// // console.log(...arr);
// // //Application: Character Array
// // let str = "hello";
// // let res = [...str];
// // console.log(res);

// // //Combining the Arrays
// // let arr1 = [12,13,14];
// // let arr2 = [15,16,17];
// // let res = [...arr1, ...arr2];
// // console.log(res);
// // O/p:[ 12, 13, 14, 15, 16, 17 ]

// // //Destructuring the Array
// // //Destructuring is unpacking the array element into a bunch of variable.
// // let arr = ["guvi","geek"];
// // //var s1 = arr[0];
// // //var s2 = arr[1];
// // let [s1,s2] = arr;
// // console.log(s1);

// // var obj = {
// //   name: "Thiru",
// //   title: "mentor"
// // };
// // var {name,title} = obj;
// // console.log(name);

// // Question:
// // var a = 34;
// // var b = 35;
// // //a + b
// // console.log("The sum of a and b is"+"\n"+(a+b));
// // //The sum of a and b is
// // //69

// // //Template literals
// // //helps us to make the concatenation inside the output statement much effective
// // //Syntax: 
// // console.log(`The sum of a and b is ${a+b}`);

// // Task:
// // write a js function to takes the number as a parameter and 
// // print the sum of the num passing as a parameter.

// // function urwish(){
// // }
// // urwish(1); -> 1
// // urwish(1,2); -> 3
// // urwish(1,2,3,4); -> 10

// // Example:
// // function sumof(...ele){
// //   //here ...ele is called as rest parameter
// //   //it is userdefined
// //   //the output of the rest paramenter is nothing but an array
// //   let sum = 0;
// //   for(var i=0; i<ele.length; i++){
// //     sum=sum+ele[i];
// //   }
// //   return sum;
// // }
// // console.log(sumof(1));
// // ------------------------------------------------------------------------------------------------
// // Day - 6

// // Classes & Objects
// // this keyword
// // small structure

// // //OOP
// // // Abstraction 
// // // Encapsulation
// // // Inheritance
// // // Polymorphism

// // Class: it is the template which consist of collection of properties, methods, ...obj etc.

// // Object: it is a real time entity.

// // How to write class?

// // //Class Syntax
// // class className{
// // }

// // //Object Syntax
// // var variableName = new objName();

// // class - class is a keyword.
// // className = is the name of the class.
// // constructor - it is special way to assigning values of objects.
// // new - is a keyword which is used in OOP.
// // this -is a keyword which is used to point the freshly created objects.

// // Example:
// // class Car{
// //   constructor(name, color){
// //     this.name = name;
// //     this.color = color;
// //   }
// // }

// // var c = new Car("BMW", "Black");
// // //an object can have Multiple Reference
// // c1 = c;
// // console.log(c1.name);

// // //Data Access
// // //method name here we call it as called method.
// // get(){
// //   return "You have" + this.name + "Car";
// // }

// // //Set - keyword
// // Setter - Updating the values of an object

// // Example: 
// // class Car{
// //   constructor(name, color){
// //     this.name = name;
// //     this.color = color;
// //   }
  
// //   set changeName(modifiedname){
// //     this.name = modifiedname;
// // }
// // }

// // var c = new Car("BMW", "Black");
// // c.changeName = "Audi";

// // console.log(c.name);

// // Task:
// // Create a object of type "thiru", "developer" and print the name of person using methods
// // O/P: Hi, This is Thiru and I'm a developer!!!
// // -------------------------------------------------------------------------------------------------
// //   Day - 7

// // MRF - Map, Reduce, Filter

// // 1.Map

// // var arr = [12,13,14,15];
// // var res = [24,26,28,30];

// // Step 1: for loop
// // Step 2: arr[i]*2
// // Step 3: declare an empty array and push.

// // Map:
// // * it will take a function as a parameter.
// // * it is applicable only for array.
// // * it will be applied to each element of an array.
// // * it will return the new array.

// // Syntax: arr.map(function name)

// // Example:
// // var arr = [12,13,14,15];
// // var result = arr.map((element)=>element*2);
// // console.log(result);

// // Output: [ 24, 26, 28, 30 ]

// // Task:
// // var arr = [{ name: "john", marks: 25}, {name: "thiru", marks: 10}]
// // increase the marks of each student by using map method. 10

// // var arr = [{ name: "john", marks: 25}, {name: "thiru", marks: 10}]
// // var result = arr.map((element)=>element.marks+10);
// // console.log(result);

// // 2.Filter:

// // var num = [2,3,4,5];

// // Step 1: for loop
// // Step 2: if condition arr[i]%2==0
// // Step 3: declare an empty array and push
// // Step 4: print the new array.

// // Filter:
// // * Filter takes the function as a parameter.
// // * it is applicable to the array.
// // * it will be applied on each and every element of an array.
// // * if a certain condition in the function is passed then it will be pushed.
// // * Or it will be ignored.
// // * it also return the array.

// // Example:
// // var num = [2,3,4,5];
// // var res = num.filter((ele)=>ele%2==0);
// // console.log(res);

// // Task:
// // var arr = [{ name: "john", marks: 26}, {name: "thiru", marks: 10}, {name: "doe", marks: 28}];
// // Display the name of student whose marks greater than 25.

// // Example:
// // var arr = [{ name: "john", marks: 26}, {name: "thiru", marks: 10}, {name: "doe", marks: 28}];
// // var res = arr.filter((ele)=>ele.marks>=25);
// // // console.log(res);
// // var name = res.map((e)=>e.name);
// // console.log(name);

// // 3. Reduce:

// // var arr = [12,13,14,15];

// // * reduce function takes the function as a parameter.
// // * apply function on each and every element of an array.
// // * it will sum of whole array
// // * it will return a single element
// // 1st case: when no initial value are gives
// // acc: accumulator: it refers to element of an array
// // ele: element: it refers element of an array
// // 2nd case: when initial values are given 0.
// //           it will store 0 as the accumulator value.

// // Case 1: Example
// // var arr = [12,13,14,15];
// // var res = arr.reduce((acc,ele)=>acc+ele);
// // console.log(res);

// // Output:54

// // Case 2: Example
// // var arr = [12,13,14,15];
// // var res = arr.reduce((acc,ele)=>acc+ele, 1);
// // console.log(res);
// // road map – 1 – 2

// // Javascript datatypes:
// // primitive => number, string, boolean
// // composite 
// // trivial
 
// //  primitive:
// // number => ex: 2, 3.5, 100,1/2 
// // string => "guvi", 'hello' , "3"
// // boolean => true or false (1 or 0)

// // composite :

// // arrays => 
// // - group of elements
// // - collection of heterogenoeous datatypes.
// // - represent as [], seperated by commos.
// // - sequential chunk of memory
// // - starts with index 0 and ends with length-1.(n-1)
// // - ex:["1",23,"hi",true,"true"]

// // objects => 

// // - it always has a key and value as a pair.
// // - represent as {}, seperated by commos.
// // - 2 ways to access  the values => dot , square brackets
// // - colon should come between key and value
// // - var obj = {
// //     name:"guvi",
// //     place:"chennai"
// // }

// // obj.name or
// // obj[name]

// // // scoping:

// // // var => ES5, we can reassign and redeclare

// // // let, const => ES6

// // var array = 10;

// // var array ="hello hi"

// // array = "hello world"

// // array = 100;

// // console.log(array);

// // // let => can reassign but we cannot redeclare

// // // ex:

// // let greet = "hi";

// // greet = "say hi" 

// // let greet = "say hello";

// // console.log(greet);

// // //const => cant reassign and redeclare.

// // const str = "guvigeek";

// // str = "helloworld";

// // const str ="hi"

// // console.log(str);

// // datatypes:

// // 2 + 2 = 4 

// // "h" + "j" ="hj"

// // "2" + "2" = "22" => concatination

// // "5" + 2 = "52"

// // "2" - "2" = 0

// // "h" - "j" = NaN

// // "5" - "2" = "3" => mathematical operation

// // "5" - 2 = 3

// // ex:1 

// // 1 + "1" + 1 - 1 + 1 - "1" + 11

// // "11" + 1 - 1 + 1 - "1" + 11

// // looping concept:

// // for loop:
// // syntax: 

// // for (let i=0; i<=5; i++(or)i--){
// //     block of code or console.log(i)
// // }
// // 1. exp1 = initialization

// // 2. exp2 = condition

// // 3. exp3 = inc or dec

// // "111" - 1 + 1 - "1" + 11

// // 110 + 1 - "1" + 110

// // 111 - "1" + 111

// // 110 + 11

// // 121

// //  var arr = [1,2,3,4,5]
   
// //    for (let i=1; i<=arr.length; i++) {
       
// //        console.log(i);
// //    }

// // split method:

// // split method => to seperate the string .split()

// // => split method always returns an array.

// // var str = "guvi";

// // var str1 = str.split("");

// // console.log(str1);

// // var str = "guvi geek";

// // var str1 = str.split(" ");

// // console.log(str1);




// // road map – 3

// // Day 3

// // // Primitive data types
// // // In built data types
// // // String, Number, Boolean
// // // Number: includes decimal
// // // String: Characters
// // // Boolean : Boolean data type

// // //Complex Data Types:
// // // Array and Object
// // var arr = [12,13,14,15];
// // console.log(arr.length);
// // arr[100]=32;
// // console.log(arr.length);
// // //Array name is called as the starting address of a array.

// // //1. K:V pair
// // //2. Async

// // //Objects:
// // //1. Objects are a structure of Key:Value pair
// // //Syntax: var objName = {KeyName: value};
// // // array is a linear structure

// // Task: 1

// // Object: name,age,year,address

// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // //Object name is also called as the reference name.
// // //Object don't have indexes.

// // //Accessing the element inside the object
// // //we can access the elements of the object using keyname.
// // //2 types of accessing
// // //1 step: DOT method (.)
// // //Syntax: objectName.keyName
// // console.log(studentName.age);
// // //2 step: Box Method
// // //Syntax: objName["keyname"];
// // console.log(studentName["age"]);
// // //Without key we don't have values.
// // //Applicable in looping
// // //Printing the Objects
// // //for-in loop
// // //It is applicable only for objects
// // //exception: even for array too
// // //Syntax: for(var key in objName){//Code}
// // //It is a Uni-direction(only forward)
// // //It uses box method for the printing of elements.
// // for(var a in studentName){
// //   console.log(a);
// // }

// // Task 2
// // // Create a object of your name with details
// // // such as your firstname, middlename, lastname.
// // // print all the values using loop statements.


// // //Insertion
// // //Here a new K:V pair will be added at the end of the line
// // //Syntax: objName.keyName = value;
// // // I need to add gender

// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // //gender - //Syntax: objName.keyName = value;
// // studentName.gender = "male";
// // console.log(studentName);

// // Task: 3
// // //add a new key pair called attendance: ["mon", "tues", "wed"];
// // //and print the attendance in line by line
// // //mon
// // //tues
// // //wed

// // //Updation
// // //it will be applicable for key which is already present
// // //Syntax: objName.keyName = value;

// // Example:
// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // studentName.age = 15;
// // console.log(studentName);

// // //Deletion
// // //Syntax:

// // var studentName = {
// //   name: "Joe",
// //   age: 32,
// //   year: 2018,
// //   address: "san fransico"
// // };

// // delete studentName.year;
// // console.log(studentName);

// // //JSON: Javascript Object Notation
// // var studName = {
// //   "name": "joe",
// //   "age": "32",
// //   "year" : "2012"
// // }

// // //It looks similar to an object but Not the object.

// // //Copy by value and copy by reference
// // //Copy by value
// // var a = 23;
// // var b = a;
// // a = 24;
// // a = 876;
// // console.log(a, b);
// // Output: 876, 23
// // //Copy by Reference
// // //it is applicable for the complex data types
// // //A single array/object can have multiple references
// // var res = [1214, 123];
// // var res = [26, 27];
// // var arr = res;
// // arr[0]=12;
// // console.log(res);
// // Output: [ 12, 27 ]

// // //Array of JSON
// // //API - Application Programming Interface

// // var arr = [{"name": "john",
// //             "age" : "23"},
// //            {"name": "joe",
// //             "age": "24"}];
// //   console.log(arr[0].name);

// // Output: john

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// // </head>
// // <body>
    
// // </body>
// // </html>

// // // XML - HTTP REQUEST: it is used to interact with servers via API.
// // //Why: to get the data from the server via API.

// // //Step 01: Create a XHR Objects
// // //var variableName: userdefined your choice
// // var request = new XMLHttpRequest();
// // //Step 02: Specifiy the API
// // request.open("GET", "https://restcountries.com/v2/all");
// // //Step 03: Sending the request
// // request.send();
// // //Step 04: Once the requested data is there in server once data is successfully loaded,
// // //Server response will be of 200 status code.
// // //Functions: they are used to perform specific task.
// // request.onload=function(){
// //     var result = JSON.parse(request.response);
// //     console.log(result);
// //     //whatever conversion has to be done here only
// //     //not outside
// // }

// // //inside the func: we are converting the
// // // data from server to the client
// // //which is in string -> object.

// // //Funtion
// // function mul(a, b){
// //   return a * b;
// // }
// // console.log(mul(2,2));

// // TAKE AWAY POINTS:
// // //Copy by value and copy by reference
// // //API
// // //XML
// // //JSON
// // //XMLHTTP - FETCH
// // //ONLOAD
// // //FUNCTION
// // //REST COUNTRIES


// // Roadmap – 5

// // Day - 5
// // //Funtion
// // function mul(a, b){
// //   return a * b;
// // }
// // console.log(mul(2,2));

// // //Anonymous Function
// // //Syntax: var functionName = function(){return};
// // //here function is stored in the varibale
// // //use cases: for most of the events.
// // Example:
// // var add = function(a,b){
// //   return a + b;
// // }
// // console.log(add(5,5));

// // //Arrow Function
// // //Es6 version
// // //to reduce the code length
// // //Syntax: var variableName=(parameter)=>{};
// // Example:
// // var multi = (a,b) => {
// //   return a*b;
// // };
// // console.log(multi(2,2));
// // Example:
// // var text = () => {
// //   console.log("Hello world");
// // }
// // text();
// // //having single statement
// // //return is noxt needed here when you have single statement
// // //if you have multiple statement inside the function use the return statement.

// // //IIFE
// // //Immediately Invoked function execution.
// // //Syntax: (function FuncName(){})();
// // //Limited memory space
// // Example:
// // (function foo(a,b){
// //   console.log(a*b);
// // })(12,13);

// // //let and const it is called as block scoped variable.
// // //var is a global and functional scope.
// // //const: constant value
// // // const pi = 3.14142;
// // Example:
// // let a = 32;
// // if(true){
// //   let a = 23;
// //   console.log(a);
// // }
// // console.log(a);

// // //ES6 Spread Operator
// // //Syntax: ...
// // //Application: expanding the array
// // //it is applicable of string or an array.
// // let arr = ["hello", "world"];
// // console.log(...arr);
// // //Application: Character Array
// // let str = "hello";
// // let res = [...str];
// // console.log(res);

// // //Combining the Arrays
// // let arr1 = [12,13,14];
// // let arr2 = [15,16,17];
// // let res = [...arr1, ...arr2];
// // console.log(res);
// // O/p:[ 12, 13, 14, 15, 16, 17 ]

// // //Destructuring the Array
// // //Destructuring is unpacking the array element into a bunch of variable.
// // let arr = ["guvi","geek"];
// // //var s1 = arr[0];
// // //var s2 = arr[1];
// // let [s1,s2] = arr;
// // console.log(s1);

// // var obj = {
// //   name: "Thiru",
// //   title: "mentor"
// // };
// // var {name,title} = obj;
// // console.log(name);

// // Question:
// // var a = 34;
// // var b = 35;
// // //a + b
// // console.log("The sum of a and b is"+"\n"+(a+b));
// // //The sum of a and b is
// // //69

// // //Template literals
// // //helps us to make the concatenation inside the output statement much effective
// // //Syntax: 
// // console.log(`The sum of a and b is ${a+b}`);

// // Task:
// // write a js function to takes the number as a parameter and 
// // print the sum of the num passing as a parameter.

// // function urwish(){
// // }
// // urwish(1); -> 1
// // urwish(1,2); -> 3
// // urwish(1,2,3,4); -> 10

// // Example:
// // function sumof(...ele){
// //   //here ...ele is called as rest parameter
// //   //it is userdefined
// //   //the output of the rest paramenter is nothing but an array
// //   let sum = 0;
// //   for(var i=0; i<ele.length; i++){
// //     sum=sum+ele[i];
// //   }
// //   return sum;
// // }
// // console.log(sumof(1));

// // roadmap – 6  7 ;

// // Day - 6

// // Classes & Objects
// // this keyword
// // small structure

// // //OOP
// // // Abstraction 
// // // Encapsulation
// // // Inheritance
// // // Polymorphism

// // Class: it is the template which consist of collection of properties, methods, ...obj etc.

// // Object: it is a real time entity.

// // How to write class?

// // //Class Syntax
// // class className{
// // }

// // //Object Syntax
// // var variableName = new objName();

// // class - class is a keyword.
// // className = is the name of the class.
// // constructor - it is special way to assigning values of objects.
// // new - is a keyword which is used in OOP.
// // this -is a keyword which is used to point the freshly created objects.

// // Example:
// // class Car{
// //   constructor(name, color){
// //     this.name = name;
// //     this.color = color;
// //   }
// // }

// // var c = new Car("BMW", "Black");
// // //an object can have Multiple Reference
// // c1 = c;
// // console.log(c1.name);

// // //Data Access
// // //method name here we call it as called method.
// // getcolor(){
// //   return "You have" + this.name + "Car";
// // }

// // //Set - keyword
// // Setter - Updating the values of an object

// // Example: 
// // class Car{
// //   constructor(name, color){
// //     this.name = name;
// //     this.color = color;
// //   }
  
// //   set changeName(modifiedname){
// //     this.name = modifiedname;
// // }
// // }

// // var c = new Car("BMW", "Black");
// // c.changeName = "Audi";

// // console.log(c.name);

// // Task:
// // Create a object of type "thiru", "developer" and print the name of person using methods
// // O/P: Hi, This is Thiru and I'm a developer!!!

// // --------------------------------------------------------------------------------------------

// // Day - 7

// // MRF - Map, Reduce, Filter

// // 1.Map

// // var arr = [12,13,14,15];
// // var res = [24,26,28,30];

// // Step 1: for loop
// // Step 2: arr[i]*2
// // Step 3: declare an empty array and push.

// // Map:
// // * it will take a function as a parameter.
// // * it is applicable only for array.
// // * it will be applied to each element of an array.
// // * it will return the new array.

// // Syntax: arr.map(function name)

// // Example:
// // var arr = [12,13,14,15];
// // var result = arr.map((element)=>element*2);
// // console.log(result);

// // Output: [ 24, 26, 28, 30 ]

// // Task:
// // var arr = [{ name: "john", marks: 25}, {name: "thiru", marks: 10}]
// // increase the marks of each student by using map method. 10 

// // var arr = [{ name: "john", marks: 25}, {name: "thiru", marks: 10}]
// // var result = arr.map((element)=>element.marks+10);
// // console.log(result);

// // 2.Filter:

// // var num = [2,3,4,5];

// // Step 1: for loop
// // Step 2: if condition arr[i]%2==0
// // Step 3: declare an empty array and push
// // Step 4: print the new array.

// // Filter:
// // * Filter takes the function as a parameter.
// // * it is applicable to the array.
// // * it will be applied on each and every element of an array.
// // * if a certain condition in the function is passed then it will be pushed.
// // * Or it will be ignored.
// // * it also return the array.

// // Example:
// // var num = [2,3,4,5];
// // var res = num.filter((ele)=>ele%2==0);
// // console.log(res);

// // Task:
// // var arr = [{ name: "john", marks: 26}, {name: "thiru", marks: 10}, {name: "doe", marks: 28}];
// // Display the name of student whose marks greater than 25.

// // Example:
// // var arr = [{ name: "john", marks: 26}, {name: "thiru", marks: 10}, {name: "doe", marks: 28}];
// // var res = arr.filter((ele)=>ele.marks>=25);
// // // console.log(res);
// // var name = res.map((e)=>e.name);
// // console.log(name);

// // 3. Reduce:

// // var arr = [12,13,14,15];

// // * reduce function takes the function as a parameter.
// // * apply function on each and every element of an array.
// // * it will sum of whole array
// // * it will return a single element
// // 1st case: when no initial value are gives
// // acc: accumulator: it refers to element of an array
// // ele: element: it refers element of an array
// // 2nd case: when initial values are given 0.
// //           it will store 0 as the accumulator value.

// // Case 1: Example
// // var arr = [12,13,14,15];
// // var res = arr.reduce((acc,ele)=>acc+ele);
// // console.log(res);

// // Output:54

// // Case 2: Example
// // var arr = [12,13,14,15];
// // var res = arr.reduce((acc,ele)=>acc+ele, 1);
// // console.log(res);

// // Output:55


// // Task:
// // HTML - Day 1

// // HTML - Hyper Text Markup Language.
// // HTML4 vs HTML5
// // HTML Tags: 
// // Head Tag: Meta Tag: information about the document
// // Element: combination of tag + content
// // p tag: paragraph tag for the theory information.
// // Ex: <p>content</p>
// // above one is called as Element.
// // self closing as well as non self closing tags.
// // self closing: some tags in html doesn't need closing, it closes itself.
// // Ex: Meta, br
// // Non-Self closing: they won't close we have to close them.
// // Ex: p,body,head,title
// // Heading tags:
// // h1-h6
// // br - break tag
// // To redirect the document, we use a tag/anchor tag
// // <a href=""></a>
// // href: represents the link where it has to redirect
// // by default it will loading in the same page
// // Ex: <a href="https://stackoverflow.co/advertising/" target="_blank">This is stackoverflow link</a>

// // Example:

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>MERN STACK - B52WD Tamil</title>
// // </head>
// // <body>
// //     <form>
// // <label for="email">Email</label><br>
// // <input type="email" name="Email" id=""><br>
// // <button type="submit">Submit</button>
// // </form>
// // </body>
// // </html>


// // forms:
// // forms in html, are needed to collect the information from the user
// // input type form element.

// // for every input type element we have label which will
// // helps to identify that html element.

// // name attribute: help us to identify what we have entered in the html field.

// // the for of the label must be same as the id of the input type.

// // Task:
// // Create form
// // 1.firstname
// // 2.middlename
// // 3.lastname
// // 4.email
// // 5.password
// // 6.upload a pdf file

// // -------------------------------------------------------------------------------------------------------------
  
// // Day 2 - CSS

// // CSS - Cascading Style Sheet
// // Why: to add customization to the website
// // div, section, article introduced in the HTML5
// // div: HTML4

// // div: stands for division/particular section in the document.
// // from the big to the smallest element in document.

// // Section: homogenous elements
// // similar category of elements
// // HTML5

// // inline css: represents inside the tag
// // Note:for a single element

// // Task:
// // heading - batch name
// // Intro - p - MERN Stack - Orange
// // article - GUVI
// // Mentor Name-inline css- 30px font size

// // internal:
// // it is applicable for the HTML document
// // it is applied using style tag inside the head tag
// // Example:
// // <style>
// //   css properties
// // </style>

// // Selectors:
// // Class - .
// // id - #

// // class selector can be applicable for more than one elements.
// // Syntax: .className
// // className is userdefined
// // use the attribute called class

// // Note:for a single element, you can apply internal as well as inline css 
// // but priority is inline.
// // inline css > internal css

// // Example:

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     //internal css
// //     <style>
// //       p{
// //         background-color: red;
// //       }
// //     </style>
// // </head>
// // <body>
// //     <p style="background-color: yellow;">This is para</p> // inline css
// // </body>
// // </html>

// // inline css > id > class > tag

// // External CSS:

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     <link rel="stylesheet" href="style.css">
// // </head>
// // <body>
// //     <p>This is para</p>
// //     <p class="main">This is biscuit</p>
// // </body>
// // </html>

// // Day 3 - HTML & CSS

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>my webpages</title>
// //     <!-- <link rel="stylesheet" href="index.css"> -->
// //     <style>
// //         .main{
// //         margin: 2px 3px;
// //         border:1px solid blue;
// //         background-color: green;
// //         }
       
// //     </style>
// // </head>
// // <body>
// // <div class="main">this is div</div>
// // <p>this is p</p>

// // </body>
// // </html>

// // Block level vs Inline

// // Block level: they always start on the new line
// // ex: div
// // inline level: they always start on the same line.
// // ex: span

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //   <!-- <link rel="stylesheet" href="style.css"> -->

// // </head>
// // <body>
// //   <div style="background-color: brown;">something something</div>
// //   <div style="background-color: brown;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nulla.</div>
// //   <span style="background-color: skyblue;">nothing nothing</span>
// //   <span style="background-color: skyblue;">nothing nothing</span>
// //   <span style="background-color: skyblue;">nothing nothing</span>
  
// // </body>
// // </html>


// // Box Model:
// // it is a Box that is wrapped around an every HTML element
// // it consist of 
// // padding
// // margin
// // border

// // margin:it is an Imaginary line around an HTML element
// // every margin consist of the individual sides
// // magin apply values in clockwise direction
// // margin-top
// // margin-right
// // margin-bottom
// // margin-left
// // Ex:
// // margin: 2px 3px 4px 5px;
// // to avoid above scenario we use shorthand Notaion
// // Short Hand Notaion:
// // all the sides we can write it on a single line

// // Border:it is a thick visible line
// // properties:width,style,color 
// // border-top-width:
// // border-top-style:
// // border-top-color:
// // Short Hand Notaion:
// // all the sides we can write it on a single line
// // border:width style color;
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>my webpages</title>
// //     <!-- <link rel="stylesheet" href="index.css"> -->
// //     <style>
// //         .main{
// //         margin: 2px 3px;
// //         border:1px solid blue;
// //         background-color: green;
// //         }
       
// //     </style>
// // </head>
// // <body>
// // <div class="main">this is div</div>
// // <p>this is p</p>

// // </body>
// // </html>

// // Position properties
// // need: even through if you have top, left bottom, or right  which can be used to place/align  the elements in the web page 
// // Now On what basis they have to be placed ??.......
// // 1.static
// // 2.relative
// // 3.absolute
// // 4.fixed 
// // 5.sticky

// // 1.static:They are not affected by top ,left, bottom or right
// // By default all the html elements are positioned static 


// // 2.relative:
// // a.They are  affected by top ,left, bottom or right
// // b.A space is created for them in the document
// // c.It will affect the document flow

// // 3.absolute
// // a.They are  affected by top ,left, bottom or right 
// // b.It will affect the document flow
// // c.no space is created 
// // d.it will be positioned w.r.t first positioned element


// // 2 cases are there
// // absolute position property has to be used along with the combination of the relative
// // ex:if child has to be absolute means (parent relative)


// // 4.fixed : IF you allot one specific location top,left, bottom, or right 
// // they are not affected by scrolling

// // 5.sticky:
// // they will get affected by scrolling , but.. if you reach their position they will stick on to it

// // https://positiondemo.netlify.app/


// // Table Example:
// // <thead> - table head
// // <tr> - table row
// // <th> - table head
// // <td> - table data
// // <tbody> - table body

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     <style>
// //        table, tr, td, th{
// //         border: 1px solid black;
// //        }
// //     </style>
// // </head>
// // <body>
// //     <table>
// //         <thead>
// //             <tr>
// //                 <th>Name</th>
// //                 <th>Batch</th>
// //             </tr>
// //         </thead>
// //         <tbody>
// //             <tr>
// //                 <td>John Doe</td>
// //                 <td>B52WD Tamil</td>
// //             </tr>
// //         </tbody>
// //     </table>
// // </body>
// // </html>

// // -----------------------------------------------------------------------------------------------
// //    DAY 10               
// // ROAD MAP Day - 4

// // * Gradients: it helps us to have the transitions linear and radical gradient.
// //             linear gradient will have the default flow of top to bottom.
// //             radial gradients will have the circle inside the box.
// //             Syntax: background-img: lineargradient(direction/angle, starting color,....Ending color);
// //                                                    to right/120
// //             Live Example: https://stripe.com/en-in

// // * Overflow: if you want to clip off a extra content in your document 
// //             then use with overflow property.
// //             1.Visible - this is the default property.
// //             2.Hidden: helps to clip of the extra content.
// //             3.Scroll 4.Auto
            
// // Flex-box: flexible box or layout
// //           we have different properties.
          
// //           flex-direction: it defined which direction the container wants to arrange the element.
// //           row, column, row-reverse, column-reverse
         
// //           flex-wrap: it helps us to know whether we have to wrap it or not.
// //           no-wrap,wrap.
          
// //           align-content: based on the flex lines. y axix
          
// //           justify-content: based on the flex items. x axix
          
// //           Practice: https://flexboxfroggy.com/

// //           Extension: https://www.flexer.dev/

// // ----------------------------------------------------------------------------------------------------------------------


// DAY 12 
// Media Query:
//            it is called RWD.
//            Responsive web design
//            based upon the device type how website is adjusting.
//            Syntax:
//            @media screen and (max-width: 700px){
//            //CSS Properties
//            }

// Example:
//  @media screen and (max-width: 700px){
//            .main{
//             font-size: 20px;
//             background-color: skyblue;
//            }
//            }

// Bootstrap link: https://getbootstrap.com/docs/4.6/getting-started/introduction/
// CDN: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
// CDN: Content Delivery Network
// Netlify: https://www.netlify.com/


// https://fontawesome.com/v4/icons/
// https://cdnjs.com/libraries/font-awesome/4.7.0

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

// Bootstrap web design:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Bootstrap web design</title>
//   <link rel="stylesheet" href="style.css">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
// </head>
// <body>
//   <div class="box">
//     <div class="container">
//       <div class="row">
//         <div class="col-md-4">
//           <div class="box-part">
//             <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
//             <h4>Instagram</h4>
//             <br>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis facere soluta nemo voluptates quam?</span>
//             <br>
//             <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Learn More</a>
//           </div>
//         </div>

//         <div class="col-md-4">
//           <div class="box-part">
//             <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
//             <h4>Twitter</h4>
//             <br>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis facere soluta nemo voluptates quam?</span>
//             <br>
//             <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Learn More</a>
//           </div>
//         </div>

//         <div class="col-md-4">
//           <div class="box-part">
//             <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
//             <h4>Facebook</h4>
//             <br>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis facere soluta nemo voluptates quam?</span>
//             <br>
//             <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Learn More</a>
//           </div>
//         </div>

//         <div class="col-md-4">
//           <div class="box-part">
//             <i class="fa fa-pinterest fa-3x" aria-hidden="true"></i>
//             <h4>PinInterest</h4>
//             <br>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis facere soluta nemo voluptates quam?</span>
//             <br>
//             <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Learn More</a>
//           </div>
//         </div>

//         <div class="col-md-4">
//           <div class="box-part">
//             <i class="fa fa-telegram fa-3x" aria-hidden="true"></i>
//             <h4>Google</h4>
//             <br>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis facere soluta nemo voluptates quam?</span>
//             <br>
//             <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Learn More</a>
//           </div>
//         </div>

//         <div class="col-md-4">
//           <div class="box-part">
//             <i class="fa fa-github fa-3x" aria-hidden="true"></i>
//             <h4>Github</h4>
//             <br>
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis facere soluta nemo voluptates quam?</span>
//             <br>
//             <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Learn More</a>
//           </div>
//         </div>
        
//       </div>
//     </div>
  
// </div>
// </body>
// </html>


// a{
//     text-decoration: underline !important;
// }

// .fa{
//     color: blue;
// }

// .box{
//     background-color: rgb(203, 200, 200);
//     padding: 20px 5px;
// }

// .box-part{
//     background-color: white;
//     margin: 15px 20px 25px 20px;
//     padding: 40px 10px;
//     text-align: center;
// }
// Day 13 - DOM

// Document Object Model


// //Creating the HTML elements dynamically
// //Step 1: create an HTML element
// //we have to use document.createElement(elename);
// //this is an inbuilt method
// //which takes element name as parameter
// var  element = document.createElement("p");
// //<div></div>
// //Step 2: to add content
// // by using inner html property
// element.innerHTML = "This My First Dynamic Tag";
// //<div>This is dynamic div</div>
// // Step 3: appending the elements to the body of document
// document.body.append(element);

// //More Detail on Inner HTML
// //1.Content
// //2.Nested Element
// //an alternate to innerHTML
// //innerText
// //innerHTML vs innerText
// //innerHTML: access the html content inside an element
// //innerText: access the text content inside an element


// var element = document.createElement("div");
// var span = document.createElement("span");
//  span.innerText = "<p>This is Nested Element</p>";
// element.append(span);
// document.body.append(element);

// // to give the attribute of the element
// //setAttribute method
// //it takes two parameter, first is attribute name, attribute value
// //both the values are string

// var element = document.createElement("div");
// element.setAttribute("class", "container");
// element.innerHTML = "this is attribute";
// document.body.append(element);

// //<div class="container">this is attribute</div>

// Task:
// <div class="container">
//   <div class="row">
//     <div class="col">This is tag</div>
// </div>
// </div>


// {/* <div class="container">
//   <div class="row">
//     <div class="col">This is tag</div>
// </div>
// </div> */}

// var container = document.createElement("div");
// container.setAttribute("class","container");

// var row = document.createElement("div");
// row.setAttribute("class", "row");

// var col = document.createElement("div");
// col.setAttribute("class", "col");
// col.innerHTML = "This is tag";

// row.append(col);
// container.append(row);
// document.body.append(container);

// -----------------------------------------------------------------------------------------------------------
// Day 14 - DOM

// <div class="container">1</div>
//   <div class="container">2</div>
//   <div id="sheet">3</div>
//   <span class="hello">Hello</span>
//   <h1 class="first"></h1>
//   <h1 class="second"></h1>
//   <h1 class="third"></h1>
//   <span class="welcome">welcome</span>

// //document.getElementById
// this method is applicable if you have id attribute in HTML element.
// this element must be in html file
// extract here in js
// it returns the html element.

// if no element with that id then the output is null

// Example:
// var res = document.getElementById("sheets");
// console.log(res);

// //document.getElementByClassName
// this is applicable if you have class selector.
// the output of the method is an array.

// Example:
// var res = document.getElementsByClassName("container");
// console.log(res);

// //document.getElementsByTagName
// this is applicable if you have tag selector.
// the output of the method is an array.

// Example:
// var res = document.getElementsByTagName("div");
// console.log(res);

// //document.querySelector
// i need to extract the first occurence of the html
// will select the first occurence of the html.
// it returns the html element.

// Example:
// var res = document.querySelector("h1");
// console.log(res);

// //document.querySelectorAll
// i need to extract the first occurence of the html
// will select the all occurence of the html element.
// it returns the output in terms of an array.

// Example:
// var res = document.querySelectorAll("h1");
// console.log(res);

// Task:
// b52wdtamil@gmail.com - valid user - invalid

// Example:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Day 2 - DOM</title>
//   <link rel="stylesheet" href="style.css">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
// </head>
// <body>
//   <label for="email">Email</label><br>
//   <input type="email" id="email"><br>
//   <button type="button" onclick="foo()">Submit</button>

//   <script src="script.js"></script>
// </div>
// </body>
// </html>


// function foo(){
//    let result = document.getElementById("email").value;
// //    console.log(result); 
//    if(result == "b52wdtamil@gmail.com"){
//     console.log("Valid!");
//    }else{
//     console.log("Invalid");
//    }
// }


// Without Function
// //<label for="email">Email</label><br>
// //<input type="email" id="email"><br>

// var label = document.createElement("label");
// label.innerHTML = "Email";
// label.setAttribute("for", "email");
// var linebreak = document.createElement("br");
// var input = document.createElement("input");
// input.setAttribute("type", "email");
// input.setAttribute("id", "email");
// document.body.append(label,linebreak, input, linebreak);

// Function
// //<label for="email">Email</label><br>
// var firstname = createlabel("label","for", "name", "Enter your firstname"); //<label for="name">Enter your Firstname</label>
// var firstnameinput = createlabel("input","type","text");
// var lastname = createlabel("label","for", "name", "Enter your lastname");
// var number = createlabel("label", "for", "phonenumber", "Enter your number");
// var b1 = linebreak("br");


// document.body.append( firstname, firstnameinput,  lastname,  number);

// function createlabel(tagname, attrname, attrvalue, content){
//     var label = document.createElement(tagname); //<></>
//     label.innerHTML = content; //<>content</>
//     label.setAttribute(attrname, attrvalue); //<div class="main">content</div>
//     return label;
// }

// function linebreak(breaker){
//     var b1 = document.createElement(breaker);
//     return b1;
// }

// //Task
// // 1.firstname
// // 2.lastname
// // 3.Email
// // 4.phonenumber

// ------------------------------------------------------------------------------

// Day 15 - DOM RECAP

// Window - window object has properties like alert,browser history,location.
//          it is the top most object and outer element of the object.
         
// //Add event listener

// var button = document.createElement("button");
// button.setAttribute("type","button");
// button.innerHTML = "Submit";
// //it takes 2 parameter
// //first is the event name
// //second is func that has to be executed
// document.body.append(button);
// button.addEventListener("click", foo);

// function foo(){
//     //prompt is also an window object
//     //it takes the input from the user
//      var res = parseInt(prompt("Enter your Lucky Number"));
//      var mul = res*2;
//      console.log(mul);
// }

// //Task - Your Name
// //Task - Multiply - 2

// //MouseOver
// var div = document.createElement("div");
// div.innerHTML = "Click Me";
// document.body.append(div);

// div.addEventListener("mouseover", ()=>div.style.color="skyblue");

// //Confirm
// var button = document.createElement("button");
// button.setAttribute("type","button");
// button.innerHTML="Confirm";
// document.body.append(button);

// button.addEventListener("click", foo);

// function foo(){
//     //Confirm: this is used for yes or no
//     //if yes means it return true
//     //if no means it return false
//     var res = confirm("Hey King you dropped this..👑");
//     console.log(res);
// }

// // win + ; - For Emonji


// https://docs.google.com/document/d/1I8qIE7_ri5Q_1QqkxJ7rdlRmGnWWW7zCa7BXrwAi8hI/edit

// https://docs.google.com/document/d/1VyZJG0KZAoZEs3h_lpP65XPekNqsbFp8bouOZSWsOTc/edit

// https://docs.google.com/document/d/1O8yVCwB_GaY5rZK1_mNkZ9GeYJLeom_dYmcVN3Mb2ws/edit

// -------------------------------------------------------------------------------------------------
  
// Async programming- Day -1: Callback

// setTimeOut(): This method execute a func, after waiting a specified number of millisecond.

// Syntax:
// setTimeout(func, milliseconds);

// Example:

// <p>SetTimeOut</p>
// <button onclick="setTimeout(foo, 5000)">Submit</button>

//   <script>
//     function foo() {
//       console.log("B52WD Tamil");
//     }
//   </script>

// setInterval(): this method repeat a given func at every given time interval.

// Syntax:
// setInterval(func, milliseconds);

// Example:

//   <h1>Setinterval</h1>
// <p id="main"></p>
// <button onclick="setInterval(foo, 5000)">Submit</button>

//   <script>
//     function foo() {
//      document.getElementById("main").innerHTML += "Hi, Bye!!";
//     }
//   </script>


// Call Back: it is a func which uses one more func as a parameter.(map)

// Javascript: Single threaded can execute single task at the time.

// Synchronous: which executes all the code line by line.

// Asynchronous: programming you can do task without waiting for a task to complete its execution.

// Cooking: Sync(wait/line by line)
//        Step 1: Cook cake
//        Step 2: Mix all incredients
//        Step 3: Microwave 30mins
//        Step 4: Eat Cake
//        Step 5: Juice
       
// Cooking: Async(no need to wait)
//        Step 1: Cook cake
//        Step 2: Mix all incredients
//        Step 3: Microwave 30mins
//        Step 4: Juice
//        Step 5: Eat Cake
       
// 1.Callstack: it is place in browser where it keep track the function that has to be called in the diagram.
//              it will executed whatever the statements inside 

// 2.Web API: it is placewhere the async operation are actually executed.

// 3.Event Queue: Queue is a datastructure, First come First serve(FIFO)
//                it stores the async function which has to be executed next....

// 4.Event Loop: it is between call stack as well as the event queue.
//               the main role of the event loop is to check whether the call stack is empty or not
//               if it is empty it will push the code from queue and pass it to call stack.
//               the call stack executes the function.
              
// ------------------------------------------------------------------------------------------------------------------------------
       
// ********** All Pastebin link - https://main--elegant-brigadeiros-75617e.netlify.app/ ***********

// ------------------------------------------------------------------------------------------------------------------------------

// Async programming- Day -2: Promise


// Task:

// function a1(){
//     function a2(){
//         function a3(){
//             console.log("Hello");
//         }
//     }
// }

// Promise: it holds the result of async operation.
// Need of promise: to overcome call back hell scenerio.
// it is an object, which holds the result of async operation.

// Syntax: var variableName = new Promise((resolve, reject)=>{})

// for every promise object we have state,
// 1.Pending
// 2.Full Filled(resolved)
// 3.Rejected

// Example:

// var age = parseInt(prompt("Enter your age!"));
// var a = new Promise((resolve, reject)=>{
//     if(age>=18){
//         resolve("You are eligible to vote!");
//     }
//     else{
//         reject("Sorry! you cannot vote yet");
//     }
// })
// // console.log(a);
// a.then((data)=>console.log(data)).catch((error)=>console.log(error));

// Example:

// //if func return a promise
// //if both resolve and reject is given it depend on order
// function foo(num){
//     return new Promise((resolve,reject)=>{
//         reject("this is reject"+num)
//         resolve("this is resolve"+num)
// });
// }

// foo(12).then((da)=>console.log(da)).catch((err)=>console.log(err));

// //chaining of promise
// //Dependent operation
// //the result of first will be served as input to second

// function foo(num){
//     return new Promise((resolve,reject)=> setTimeout(()=> resolve(num*2),2000))};
//     foo(5).then((data)=>{
//         console.log(data);
//         //foo(5*2 = 10)
//         return foo(data)
//     }).then((data1)=>{
//         //10*2 = 20
//         console.log(data1);
//         return foo(data1)
//     }).then((data2)=>console.log(data2)).catch((err)=>console.log(err));

// //Promise.all()
// //when you have multiple promise
// //it will wait until all the promise are getting resolved
// //and then it turns an array of values

// //Draw back
// //if one promise is rejected it won't go for other
// //it will display the information of the rejected promise


// var p1 = new Promise((resolve,reject)=>{
//     if(false){
//         setTimeout(()=>resolve("P1 is resolved"),3000)
//     }
//     else{
//         setTimeout(()=>reject("P1 is rejected"),4000)
//     }
// });

// var p2 = new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("P2 is resolved"),2000)
//     }
//     else{
//         setTimeout(()=>reject("P2 is rejected"),4000)
//     }
// });

// var p3 = new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("P3 is resolved"),4000)
//     }
//     else{
//         setTimeout(()=>reject("P3 is rejected"),4000)
//     }
// });

// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err));

// ----------------------------------------------------------------------------------------------------

// Async programming- Day -3: Promise & async-await

// Fetch:
// - it is alternative to XHR.
// - Fetch takes API as a parameter.
// //Syntax: fetch("API LINK");
// - Return type is a promise
// - The body section in the fetch is a readable stream.
// - to convert readable stream to object(JSON) We need to .json() method.
// - Remember: always need a .then and .catch to handle promise


// //Task - Print the country name
// var res = fetch("https://restcountries.com/v2/all");
// res.then((data)=>data.json()).then((data1)=>{
//     for(var i=0; i<data1.length; i++){
//         console.log(data1[i].name);
//     }
// });

// // Print Country Name in Browser

// var res = fetch("https://restcountries.com/v2/all");
// res.then((data)=>data.json()).then((data1)=>{
//     for(var i=0; i<data1.length; i++){
//         console.log(data1[i].name);
//         var div = document.createElement("div");
//         div.innerHTML = `
       
//         <div class="row">
//         <div class="col md-4">
//         <div class="card" style="width: 18rem;">
//         <img src="${data1[i].flag}" class="card-img-top" alt="">
//         <div class="card-body">
//           <h5 class="card-title">${data1[i].name}</h5>
//           <h5 class="card-title">${data1[i].region}</h5>
//           <h5 class="card-title">${data1[i].subregion}</h5>
//         </div>
//       </div>
//       </div>
//       </div>
//  `;
//         document.body.append(div);
//     }
// });

// // Print the country name





// Day - 19 / Asyn-await

// Task: 1

// https://data.covid19india.org/v4/min/data.min.json
// Print Confirmed Cases
// Use Fetch and For-in

// var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
// res.then((data)=>data.json()).then((data1)=>{
//     for(var i in data1){
//         console.log(i, data1[i].total.confirmed);
//         var div = document.createElement("div");
//         div.innerHTML = `<p>${i}</p>
//                          <h6>${data1[i].total.confirmed}</h6>`

//         document.body.append(div);
//     }
// });

// Async and Await
// it is applicable to the functions
// a normal func can be converted into async func by putting async keyword.

// async func always return a promise.
// to handle promise we have await keyword.
// await is used to inside the async func.
// await help us to wait until the promise gets resolved.
// await replacement for the .then


// async function foo(){
//     var res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//     var result = await res.json();
//     console.log(result);
// }

// foo();



// Error Handling:

// //Syntax
// try{

// } catch {

// }

// try-catch
// try: testing block
// catch: error handling block

// function bar(){
//     return new Promise((resolve, reject)=> reject("This is reject"));
// };

// async function foo(){
//     try {
//         var res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//         var result = await res.json();
//         console.log(result);
//         var res2 = await bar();
//         console.log(res2);
//     }catch (error){
//         console.log(error);
//     }
// }

// foo();

// //await chaining
// function bar(num){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve(2*num), 3000)
//     });
// }

// async function foo(){
//     var v1 = await bar(2);
//     console.log(v1);
//     var v2 = await bar(v1);
//     console.log(v2);
//     var v3 = await bar(v2);
//     console.log(v3);
// }

// foo();

// https://codepen.io/





  
  




































































































































































