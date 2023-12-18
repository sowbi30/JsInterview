// // // spread operaters meaning expanding the Array

// let arr =["hello","Mukesh"];
// console.log(...arr);
// // hello Mukesh

// let str = "hello";
// let res =[...str];
// console.log(res);
// //[ 'h', 'e', 'l', 'l', 'o' ]

// // //combaining the array
// let arr1 =[12,13,14];
// let arr2 =[15,16,17];
// let res1 = [...arr1,...arr2];
// console.log(res1);
// //[ 12, 13, 14, 15, 16, 17 ]

// // //template Iterator
// // // helps us to make the concatenation inside the output statement much effective

// var a = 34;

// var c = 95;
// //a+c
// console.log("The sum of a and c is"+"\n"+(a+c));
// // // ot - The sum of a and c is
// // //129
// console.log(`The sum of a and c is ${a+c}`);
// // // ot - The sum of a and c is 129

// // //Rest operator (only used in function)

// function sumof(...ele){
//     let sum = 0;
    
//     for (let i =0; i<ele.length; i++){
//         sum =sum+ele[i];
//     }
//     return sum;
//   }
// console.log(sumof(1));

// // // output - 1

// // // destructing the array in objects
// var obj = {
//     name :"sow",
//     title : "mentor"};
//     var {name,title}=obj;
//     console.log(title);
//     // mentor
    
//     // destructing the array
//     let arr =["guvi","geek"];
//     let [s1,s2]=arr;
//     console.log(s1);
//     //guvi