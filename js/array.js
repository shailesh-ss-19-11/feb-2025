// array //////////////////////////////////////////////
// group of different type of data
const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Cantaloupe",
  "Cherry",
  "Clementine",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Currant",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Goji Berry",
  "Gooseberry",
  "Grape",
  "Grapefruit",
  "Guava",
  "Honeydew",
  "Huckleberry",
  "Jackfruit",
  "Jambul",
  "Jujube",
  "Juniper Berry     ",
  "Kaffir Lime",
  "Kiwi",
  "Kumquat",
  "Lemon",
  "Lime",
  "Longan",
  "Loquat",
  "Lychee",
  "Mandarin",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Mulberry",
  "Nance",
  "Nectarine",
  "Olive",
  "Orange",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Physalis",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Pomelo",
  "Prickly Pear",
  "Quince",
  "Raisin",
  "Raspberry",
  "Redcurrant",
  "Rhubarb",
  "Rose Apple",
  "Salak",
  "Sapodilla",
  "Sapote",
  "Satsuma",
  "Sharon Fruit",
  "Soursop",
  "Star Apple",
  "Starfruit",
  "Strawberry",
  "Surinam Cherry",
  "Tamarillo",
  "Tamarind",
  "Tangelo",
  "Tangerine",
  "Ugli Fruit",
  "White Currant",
  "White Sapote",
  "Yunnan Hackberry",
  "Youngberry",
  "Ziziphus Fruit",
];

// const isAvailable = fruits.includes("Juniper Berry")
// console.log("🚀 ~ isAvailable:", isAvailable)

// let findedIndex = 0;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].trim() === "Juniper Berry") {
//     findedIndex = i;
//   }
// }
// console.log("🚀 ~ findedIndex:", findedIndex);

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
// const fruits = ["grapes", "apple", "banana", "mango", "orange"];

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
