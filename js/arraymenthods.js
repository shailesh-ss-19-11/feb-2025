// console.log("hellow")
// array methods with callbacks

// const arr = [234, 23, 234, 34, 534, , 457, 567];
// console.log("🚀 ~ arr:", arr)
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log("🚀 ~ element:", element)
// }

// forEach
// only itereate
// does not return anything

// 1st way
// function arrayIterate(item) {
//   console.log(item);
//   if (item === 23) {
//     console.log(true);
//   }
// }

// function forEach(arrayIterate){
//     arrayIterate
// }

// for(let i=0;i<arr.length;i++){
//     forEach(arrayIterate(arr[i]))
// }

// arr.forEach(arrayIterate);

// 2nd way

// arr.forEach(function(item){
//     console.log(item)
// })

// 3rd way
// arr.forEach((item)=>console.log(item))

// map
// it iterate the array and returns new array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //find square of all elements

// function findSquare(element) {
//   return element * element;
// }

// let newArr = [];
// for (const element of arr) {
//     newArr.push(findSquare(element))
// }
// console.log("🚀 ~ newArr:", newArr)

// const newArray = arr.map((element) => {
//   return element * element;
// });

// function makeDiscountby10(item) {
//   let newItem = { ...item };
//   let price = item.price - 10;
//   newItem.price = price;
//   return newItem;
// }

// const cart = [
//   { id: 1, itemName: "shampoo", price: 150 },
//   { id: 2, itemName: "nirma", price: 300 },
//   { id: 3, itemName: "oil", price: 700 },
//   { id: 4, itemName: "facewash", price: 50 },
// ];

// let newCart = [];
// for (const element of cart) {
//   newCart.push(makeDiscountby10(element));
// }
// console.log("🚀 ~ newCart:", newCart);

// const newCart = cart.map((item)=>{
//     let price = item.price-10;
//     item.price = price
//     return item
// })
// console.log("🚀 ~ newCart ~ newCart:", newCart)

// console.log("🚀 ~ newArray:", newArray);
// sort ----> itereate and sort and new arry return krta hai

// const cart = [
//     { id: 1, itemName: "shampoo", price: 150 },
//     { id: 2, itemName: "nirma", price: 300 },
//     { id: 3, itemName: "oil", price: 700 },
//     { id: 4, itemName: "facewash", price: 50 },
//   ];

// let strArr = ["shailesh","manoj","vinay"]
// const sortedArray = strArr.sort();

// let numArr = [54, 654, 1, 4, 1, 521, 54, 94, 621, 621, 6548, 65, 16, 2165, 4];
// const sortedArray = numArr.sort();
// const sortedArray = numArr.sort((a,b) => a-b);
// console.log("🚀 ~ sortedArray:", sortedArray);

// const cart = [
//   { id: 1, itemName: "shampoo", price: 150 },
//   { id: 2, itemName: "nirma", price: 300 },
//   { id: 3, itemName: "oil", price: 700 },
//   { id: 4, itemName: "facewash", price: 50 },
// ];

// const sortedCart = cart.sort((a, b) => {
//   console.log(a, b);
//   return a.price - b.price;
// });
// console.log("🚀 ~ sortedCart ~ sortedCart:", sortedCart);

// filter itereate and check condition and return new array

// const fruits = [
//   "Apple",
//   "Apricot",
//   "Avocado",
//   "Banana",
//   "Blackberry",
//   "Blackcurrant",
//   "Blueberry",
//   "Boysenberry",
//   "Cantaloupe",
//   "Cherry",
//   "Clementine",
//   "Coconut",
// ];

// const filteredFruits = fruits.filter((fruit)=>{
//     return fruit!=="Cherry"
// })
// console.log("🚀 ~ filteredFruits ~ filteredFruits:", filteredFruits)

// const cart = [
//   { id: 1, itemName: "shampoo", price: 150 },
//   { id: 2, itemName: "nirma", price: 300 },
//   { id: 3, itemName: "oil", price: 700 },
//   { id: 4, itemName: "facewash", price: 50 },
// ];

// const filteredItems = cart.filter((item)=>{
//     return item.itemName!=="facewash"
// })
// console.log("🚀 ~ filteredItems ~ filteredItems:", filteredItems)
// find iterate array return single item
// const cart = [
//   { id: 1, itemName: "shampoo", price: 150 },
//   { id: 2, itemName: "nirma", price: 300 },
//   { id: 3, itemName: "oil", price: 700 },
//   { id: 4, itemName: "facewash", price: 50 },
// ];

// const findItem = cart.find((item)=>{
//     return item.itemName==="shampoo";
// })

// console.log("🚀 ~ findItem ~ findItem:", findItem)

// filter
// find
// sort
// reduce

// 27 feb
// default params
// rest params
// params destructuring
// callback
// function returning function
// closure

// // 28 feb array methods
// // 1 march revision

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const totalValue = numbers.reduce((prev,current)=>{
//     return prev+current
// })
// console.log("🚀 ~ totalValue ~ totalValue:", totalValue)

// previousValue = 0,1,3,6,10,15
// currentValue = 1,2,3,4,5,6

// reduce(previousValue,currentValue)//  pre+current

// const cart = [
//   { id: 1, itemName: "shampoo", price: 150 },
//   { id: 2, itemName: "nirma", price: 300 },
//   { id: 3, itemName: "oil", price: 700 },
//   { id: 4, itemName: "facewash", price: 50 },
// ];

// const totalPrice = cart.reduce((previous, current) => {
//   return previous + current.price;
// }, 0);
// console.log("🚀 ~ totalPrice ~ totalPrice:", totalPrice)