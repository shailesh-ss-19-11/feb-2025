// // this ---> this refers to the current object

// let userFunctions = {
//   callme: function () {
//     console.log(`my name is ${this.name} and age is ${this.age}`);
//   },

//   isAge18: function () {
//     return this.age > 18;
//   },
// };

// let user1 = {
//   name: "xyz",
//   age: "23",
//   address: "nagpur",
//   callme: userFunctions.callme,
//   isAge18: userFunctions.isAge18,
// };

// let user2 = {
//   name: "mno",
//   age: "26",
//   address: "wardh",
//   callme: userFunctions.callme,
//   isAge18: userFunctions.isAge18,
// };

// let user3 = {
//   name: "abc",
//   age: "25",
//   address: "amravati",
//   callme: userFunctions.callme,
//   isAge18: userFunctions.isAge18,
// };

// user2.callme();
// user2.isAge18();

// let usermethods = {
//     callme:function(){
//         console.log(this)
//     }
// }

// let user1={
//     name:"xyz",
//     age:24,
//     callme:usermethods.callme
// }

// let user2={
//     name:"xyz",
//     age:24,
//     callme:usermethods.callme
// }

// user2.callme()


// function createuser(name,age,isage18){
//     let obj = {
//         name,
//         age,
//         isage18
//     }
//     return obj;
// }

// const user1 = createuser("xyz",25,true)
// const user2 = createuser("abc",26,false)
// console.log("🚀 ~ user1:", user1)
// console.log("🚀 ~ user1:", user2)


// call apply bind 
let user1={
    name:"xyz",
    age:24,
    about:function(hobby){
        console.log(this.name,this.age,hobby)
    }
}

let user2={
    name:"abc",
    age:24,
}

user1.about.call(user2,"swimming")