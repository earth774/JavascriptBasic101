console.log("Hello");

// Object
var object = {
    name:"sutthipong",
    age:23,
};

object.age = 25;

let nameAge = "age";

object[nameAge] = 50;

let nameLet =1;

const nameConst = "sutthipong";

console.log(object);

// Array

let varArray = [
    {
        name:"suphachai",
        age:26
    },
    {
        name:"sutthipong",
        age:23
    }
];
// varArray[3] = 4;
// varArray[5] = 6;
// varArray[4] = 10

// varArray.push(7)
// varArray.push(8)

console.log(varArray)
// console.log(varArray[4]);

// console.log(varArray.length);

// use for in javascript
// for(let i = 0;i<varArray.length;i++){
//     console.log(varArray[i]);
// }

// for in and of 
// for(let i of varArray){
//     (i.age<=23)?
//         console.log(i)
//     :
//         console.log('error');
// }


// Foreach
varArray.forEach(data => {
    console.log(data);
});

// Map loop data 
varArray.map(data=>{
    // data.age = 24;
    console.log(data);
})

let info = varArray.filter(data=>data.age<=23)
console.log(info);

// let person = prompt("โปรดกรอกชื่อของท่าน", "Harry Potter");
// console.log(person);
// const a = 0.3;
// a= 1;

// const number = 0.3;
// number = 1;
// console.log(a);


// console.log(nameVar, nameLet , nameConst);


// Function

// function InputName(){
//     let name = prompt("โปรดกรอกชื่อของท่าน");
//     console.log(name);
// }

let InputName = ()=>{
    let name = prompt("โปรดกรอกชื่อของท่าน");
    console.log(name);
}

let InputAge = ()=>{
    let age = prompt("โปรดกรอกอายุของท่าน");
    console.log(age);
}