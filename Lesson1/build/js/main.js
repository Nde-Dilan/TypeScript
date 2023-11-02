"use strict";
// let myName = "Dave";
/*
let myName: string = "Dave";

let anyApp: string | number |boolean;

anyApp = 42;

anyApp = "777";

const sum = (a: number, b: number) => {
  return a + b;
};



let re: RegExp =/|w+/g;*/
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strater", "les paul", 5150];
let mixedData = ["EVH", 1984, true];
//Tuples
let myTuple = ["Dilan", 32, 55];
mixedData = myTuple;
// myTuple = mixedData; error Target requires 3 element(s) but source may have fewer
//Objects
let myObj;
console.log(typeof []);
console.log(typeof function () { });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
myObj = {};
myObj = [];
const exampleObj = {
    prop1: "Dil",
    prop2: true,
};
let evh = {
    name: "Dilll",
    active: false,
    albums: [1, 1, 16],
};
let jp = {
    name: "jep",
    active: true,
    albums: [156, 1, 16],
};
console.log(typeof 5);
let person = {
    name: "hello",
    age: 15,
};
person.age = 45;
console.log(person);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
//Enums
//"unlike most TypeScript features, Enums are nota type-level addition to js but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
