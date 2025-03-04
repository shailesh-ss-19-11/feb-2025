// functions block of scope of program
// program module

// three types of functions
// normal function
// function hello1() {
// console.log("intro of function")
// }

// // expressive function
// const hello2 = function () {
// console.log("intro of function")
// };

// // arrow function
// const hello3 = () => {
// console.log("intro of function")
// };

// hello1();
// hello2();
// hello3();

// function isEven(number) {
// return number % 2 === 0;
// }

// const isEven = function (number) {
// return number % 2 === 0;
// };

// const isEven = (number) => {
// return number % 2 === 0;
// };

// const isEven = (number) => number % 2 === 0;

// const checkisEven = isEven(3); //argument
// console.log("🚀 ~ checkisEven:", checkisEven);

// const arr = [10, 54, 87, 654, 748, 454, 54];
// console.log("🚀 ~ arr:", arr.length);
// // find the index of target value

// function findTarget(arr, value) { //parameters
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] === value) {
// return i;
// }
// }
// return -1;
// }

// const findedValue = findTarget(arr, 54); ///argument
// console.log("🚀 ~ findedValue:", findedValue);

// function inside function //////////////////////////////////////////////////////////
// function parentFunction() {
// console.log("this is parent start");
// function child1() {
// console.log("this is child1");
// }

// function child2() {
// console.log("this is child2");
// }

// child1();
// child2();
// console.log("this is parent end");
// }

// parentFunction();

// lexical scope
// const name = "ajay";
// function parentFunction() {
// // const name = "shailesh";

// // console.log("this is parent start");
// function child1() {
// // const name = "vinay";
// console.log("this is child1", name);
// }

// function child2() {
// const name = "saksham";
// console.log("this is child2", name);
// }

// child1();
// child2();
// // console.log("this is parent end");
// }

// parentFunction();

// let const var
// let , const scope varibale
// var function scope varibale

// {
// let name = "garima";
// console.log(name);
// }

// {
// const name1 = "garima";
// console.log(name1);
// }

// {
// var name1 = "garima";
// }
// console.log(name1);

// hoisting /////////////////////////////////
// hello();

// // function hello() {
// // console.log("hello world");
// // }

// const hello = () =>{
// console.log("hello world");
// }

// console.log("🚀 ~ name1:", name1)
// var name1 = "shailesh"
// console.log("🚀 ~ name1:", name1)

// default parameters
// function hello(a, b = 0) {
//   console.log(a + b);
// }

// hello(1, 90);

// rest parameter

// function hello(a,b,...c) {
// console.log(a, b,c);
// }

// hello(1,7,2,34,54,56,67,78);

// function sumOfAllNumbers(...a) {
// let total = 0;
// for (let number of a) {
// total = total + number;
// }
// return total;
// }

// const total = sumOfAllNumbers(1, 7, 2, 34, 54, 56, 67, 78);
// console.log("🚀 ~ total:", total);

// function returning function
// closure is a function with its lexical enviornment
// function parentFunction(){
// function child(){
// console.log("this is child function");
// }

// return child;
// }

// const child = parentFunction()
// child();

// closure example ///////////////////////////////////
// function parentFunction(a) {
//   function child(b) {
//     return a + b;
//   }
//   return child;
// }

// const child = parentFunction(10);
// const result = child(20);
// console.log("🚀 ~ result:", result);

// callback

// function myfunction2() {
//   console.log("this is my function 2");
// }

// function myfunction1(callback) {
//   callback();
//   //   console.log(a);
// }
// myfunction1(myfunction2); //argument

// parameter destructuring
// const obj1 = {
//   name: "shailesh",
//   age: 45,
//   address: "aksjdhjasd",
//   mobile: 987987987,
// };

// function destruct({ name, age, ...rest }) {
//   console.log(name, age, rest);
// }

// destruct(obj1);

// function callmeAgain(){
//     console.log("this is callme again function ")
// }
// // what is function  small peace of code for perform pertucular task
// function callme(callback){
//     console.log("hhhh")
//     callback()
// }

// callme(callmeAgain);

// const callme = function(){

// }

// const callme=()=>{

// }
