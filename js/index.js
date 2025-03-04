// console.log("hellow world");
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
// age = Number(age);
// age = +age;
// console.log(typeof age);

// const name="shailesh";
// name="vinay";
// console.log("🚀 ~ name:", name)

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

// console.log(20 === 20 || true === true);

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

// let age = "25";
// let num = 25;
// console.log(age === num);
// let name = "Shailesh ";
// let name2 = "Shailesh";
// console.log(name.trim()==name2)
// 0,1,2,3,4
// const newName = name.trim();
// console.log(newName.length);
// console.log(name[name.length - 2]);
// console.log(name.length-1)
// console.log(name[name.length-1])
// console.log(name.slice(1,6))
// console.log(name.slice(0))
// console.log(name.toUpperCase())
// console.log(name.toLowerCase());
// console.log(name.trim());

// let name = "this is no one we want in the world";
// console.log(name.includes("is"));

// let total = 0;
// for (let char = 0; char < name.length; char++) {
//   if (name[char] === "w") {
//     total = total + 1;
//   }
// }
// console.log("🚀 ~ total:", total);

// falsy values
// false
// 0
// ""
// undefined
// null

// const value = !false
// console.log("🚀 ~ value:", value)
// if(!false){
//     console.log("inside if")
// }

// let customer = {
//   pan: "LIHPS7275M",
//   email: "as@asd.asd",
//   gender: "MALE",
//   pincode: 400001,
//   fullName: "SHEELA SHARMA",
//   birthDate: "1991-01-02T00:00:00.000+05:30",
//   employmentType: "SELF_EMPLOYED",
//   isMarried: true,
// //   salaryAmount: 0,
// };

// console.log("🚀 ~ customer.salaryAmount:", customer.salaryAmount)
// if (customer.salaryAmount) {
//   console.log(customer.fullName);
// }

// let num1=20
// let num2=20
// console.log(num1===num2)

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

// switch case
// const month = "feb";
// switch (month) {
//   case "jan":
//     console.log("january");
//     break;
//   case "feb":
//     console.log("february");
//     break;
//   case "mar":
//     console.log("march");
//     break;
//   default:
//     console.error("no month left");
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
// let i=0;
// while(i<10){
//     console.log(i)
//     i++;
// }

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

