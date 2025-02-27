console.log("hellow world");
// ES6 echma script
// es 2024

// primitive and non primitive
// number || array
// string || class
// Boolean || object
// undefined ||
// null ||

// types of variables
// var --- globle scope
// let --- block scope
// const --- constant variable

// var name = "shailesh";
// var age = "25";
// age = +age;
// console.log(typeof age);

// const name="shailes";
// name="vinay ";

// let name = "shailesh";
// {
//     let name="vinay";
// }
// console.log(name);

// operators
// let num1 = 10;
// let num2 = 20;
// let num3 = "30";
// // arithmatic + - / * %
// // let num4 = num1 + num2;  //30
// let num4 = num1 - num2; //30
// let num5 = num1 + num3; //10+30 = 1030;
// console.log("🚀 ~ num4:", num5);

// let str1 = "shailesh";
// let str2 = "gokhale";

// // console.log("🚀 ~ str1+str2:", str1+" "+str2)
// // logical  && || !
// console.log(num1 + num2 == 30 && num1 + num3 == "1030");
// console.log(num1 + num2 == 40 || num1 + num3 == "10");
// console.log(!(num1 + num2 == 40 || num1 + num3 == "10"));

// assignment =
// relational operators < > <= >= == === // true false
// let num1="10";
// let num2=20;

// console.log(num1<num2);
// console.log(num1>num2);
// console.log(num1>=num2);
// console.log(num1<=num2);
// console.log(num1==num2);
// console.log(num1===num2);  //ES6 feature value and datatype

// ternary operator ? :
// expression ? exec 1: exec2
// num1==num2 ?
// console.log("equal"):
// console.log("not equal")

// string /////////////////////////////////////////

// let name = "Shailesh";
// 0,1,2,3,4
// console.log(name.length)
// console.log(name.length-1)
// console.log(name[name.length-1])
// console.log(name.slice(1,6))
// console.log(name.slice(0))
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.trim());

// let name = "Shailesh";
// for (let char = 0; char < name.length; char++) {
//   console.log(name[char]);
//   if(name[char]==='i'){
//     console.log(`this is ${name[char]}`)
//   }
// }

// falsy values
// false
// 0
// ""
// undefined
// null
// let name;
// name="";
// name=false;
// name=-1;
// name=null;
// name=0;
// if (name) {
//   console.log(name + "is there");
// } else {
//   console.log("no name available");
// }

// conditional statements
// if else if
// const winningNumber = 16;
// const guessingNumber = +prompt("guess the number");
// console.log("🚀 ~ guessingNumber:", guessingNumber);
// if (winningNumber === guessingNumber) {
//   console.log("you are win....");
// } else if (guessingNumber < winningNumber) {
//   console.log("number is too short....");
// } else if (guessingNumber > winningNumber) {
//   console.log("number is too long....");
// }

// nested if else

// const winningNumber = 16;
// const guessingNumber = +prompt("guess the number");

// if(winningNumber===guessingNumber){
//     console.log("you win......")
// }else{
//     if(guessingNumber<winningNumber){
//         console.log("number is too short")
//     }else{
//         console.log("number is too long")
//     }
// }

// switch
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// console.log("xyz");
// while loop

// let i = 1; //1
// // 1+2+3+4+5..10
// let total = 0; // 0,1,3,6
// while (i <= 100) {
//   //true,true
//   total = total + i; //1,3,6,10 5050
//   i++; //2,3,4,5
// }

// console.log(total);
// let num = 100;
// let newTotal = (num * (num + 1)) / 2;
// console.log("🚀 ~ newTotal:", newTotal);

// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);

// for loop
// initialization;condition ;inc/dec
// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   if(i==7){
//     break;
//   }
//   console.log(i);
// }

// console.log("out of loop")

// do while loop
// i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// array //////////////////////////////////////////////
// group of different data type
// const fruits = ["grapes", "apple", "banana", "mango", "orange"];
// const newElements = fruits;
// console.log(newElements===fruits)
// newElements.push('mmm');
// console.log("🚀 ~ fruits:", fruits)
// console.log("🚀 ~ newElements:", newElements)

// fruits.push('pineapple');
// const poppedElement = fruits.pop()
// console.log("🚀 ~ fruits:", poppedElement)
// fruits.shift();
// fruits.unshift("coconut");
// console.log("🚀 ~ fruits:", fruits)

// console.log(Array.isArray(fruits))
// const fruits = ["grapes", "apple", "banana", "mango", "orange"];
// console.log(typeof fruits);

// const clonnedArr1 = fruits.slice(0).concat(["item1","item2"]);
// console.log("🚀 ~ clonnedArr1:", clonnedArr1)

// const clonnedArr2 = [].concat(fruits,"item5","item6")
// console.log("🚀 ~ clonnedArr2:", clonnedArr2)

// const arr1 = ["item6","item7"]
// const clonnedArr3 = [...fruits,"item5","item6",...arr1]; //es6 spread operator
// console.log("🚀 ~ clonnedArr3:", clonnedArr3)

// iterate array
const fruits = ["grapes", "apple", "banana", "mango", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     if(fruits[i]==="mango"){
//         console.log(fruits[i])
//     }
// }

// for of loop
// for (let item of fruits) {
//   if (item === "mango") {
//     console.log("mango found in array ");
//   }
// }

// for in loop // index
// for (let index in fruits) {
//   if (fruits[index] === "mango") {
//     console.log("mango found");
//   }
// }

