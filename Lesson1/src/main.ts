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

let stringArr: string[] = ["one", "hey", "Dave"];
let guitars: (string | number)[] = ["Strater", "les paul", 5150];
let mixedData = ["EVH", 1984, true];

//Tuples
let myTuple: [string, any, number] = ["Dilan", 32, 55];

mixedData = myTuple;
// myTuple = mixedData; error Target requires 3 element(s) but source may have fewer

//Objects

let myObj: object;

console.log(typeof []);
console.log(typeof function () {});
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});

myObj = {};
myObj = [];

const exampleObj: object = {
  prop1: "Dil",
  prop2: true,
};

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Dilll",
  active: false,
  albums: [1, 1, 16],
};

let jp: Guitarist = {
  name: "jep",
  active: true,
  albums: [156, 1, 16],
};

console.log(typeof 5);

//Interface vs type : with interface you don't need the equal sign and it's not the case for type


interface Person {
  name: string;
  age: number;
  favoriteAnime?: string;
  isBoy?: boolean;
}

let person: Person = {
  name: "hello",
  age: 15,
};

person.age = 45;

console.log(person);

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(jp));

//Enums
//"unlike most TypeScript features, Enums are nota type-level addition to js but something added to the language and runtime"

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

//Type Aliases are just working when using type not interface

type stringOrNumber = string | number;

type boolOrString = boolean | string;

type Pianist = {
  name: stringOrNumber;
  active: boolOrString;
  tel: number;
};

type PostId1 = stringOrNumber;

//Litteral types

let myName: "Dilan" | "Yann";
myName = "Dilan";

console.log(myName);

const sum = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(sum(1, 8));

// type mathFunction = (a:number, b:number) => number;

interface mathFunction {
  (a: number, b: number): number;
}

const multiply: mathFunction = function (c, d) {
  return c - d;
};

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if(typeof c !== 'undefined') return a + b + c;
  return a+b;
};

//1:31:12

