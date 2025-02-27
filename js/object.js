// object //////////////////////////////////////////////////////////////////////
// real time data holder
// key value pairs

let user = {
  name: "shailesh",
  age: 26,
  address: "nagpur",
  hobbies: ["cricket", "swimming", "trekking"],
  "is Married": false,
};
// console.log("🚀 ~ user:", user)
//   console.log(user["is Married"]);
// console.log(user.name);
// user.callme();

// const userKeys = Object.keys(user);
// const values = Object.values(user);
// console.log("🚀 ~ values:", values)

// for (let i = 0; i < userKeys.length; i++) {
//   // console.log(userKeys[i]);
//   // console.log(user[userKeys[i]])

//   console.log(`${userKeys[i]} : ${user[userKeys[i]]}`);
// }

// for (let item of userKeys) {
//   console.log(`${item}: ${user[item]}`);
// }

// for (let index in userKeys) {
//   console.log(`${userKeys[index]}: ${user[userKeys[index]]}`);
// }

// const arr1 = [1, 3, 4, 5, 6];
// const arr2 = [3, 56, 3, 2, 3, 4];

// const newarr = [...arr1, ...arr2];
// console.log("🚀 ~ newarr:", newarr)

// const arr = 1232424
// console.log("🚀 ~ arr:", ...arr)

// destructuring array and object

// const arr = ["item1","item2","item3","item4"];
// const abc = arr[0]
// const abc2 = arr[1]

// const [xyz,xyz2,...rest] = arr;
// console.log("🚀 ~ ...rest:", rest)

// object distructuring and spread operator

// const obj1 = {
//     name:"shailesh",
//     address:"nagpur",
//     phone:6465164616554,
//     adhar:54654621659465,
// }

// const obj2 = {
//     hobbies:["swiming","singing"]
// }

// // destructuring
// const {name,address:add,...rest} = obj1;
// console.log( name,add,rest)

// spread operator in object
// const obj3 = {...obj1,...obj2}
// console.log( obj3)

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "objvalue1";
// const value2 = "objvalue2";

// // obj = {
// //     objkey1:"objvalue1",
// //     objkey2:"objvalue2"
// // }

// const newobj = {
//     [key1]:value1
// }

// newobj[key2] = value2;
// console.log("🚀 ~ newobj:", newobj)
