Distructuring: 

distructuring korar uddessho hocche ., kono array or object property er sob gula value instantly use korar jonno  jaate bar bar call kora na lage 


property name change er jonno (: colon ) sign use korte hobe .. jokhon initialise korba 



> Object.keys() eekti object er property er name gula (keys) ke array akare return kore

> Object.values() ekti object er property value  (values ) ke  array akare return kore

> Object.entries() ekti object er property value gulake [key,valye] pair akare two dimensional array akare return kore 


> delete operator ekti object theke sudu matro ektu property delete kore . eti sudu matro nijosso property delet korte paare ,,, kono inherited property delete korte pare na ,,



> Object.freeze() prevents the modification or addition of an existing object

> Object.seal() prevents the addition or deletion of attributes of an existing object  But  modification of attributes of objects works 




> loop korar jonno string e for of use kora laage and object e for in 









most common ES6 features in js 



🔹 1. let and const

Used for block-scoped variable declarations.

let count = 5;       // Mutable
const PI = 3.14;     // Immutable

🔹 2. Arrow Functions (=>)

Shorter function syntax and lexical this binding.

const add = (a, b) => a + b;

🔹 3. Template Literals

Use backticks (`) for string interpolation and multi-line strings.

const name = 'Alice';
console.log(`Hello, ${name}!`);

🔹 4. Destructuring

Easily extract values from arrays or objects.

// Object destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Array destructuring
const [a, b] = [1, 2];

🔹 5. Default Parameters

Set default values for function parameters.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}

🔹 6. Spread and Rest Operators (...)

Spread – expands elements.

Rest – collects elements.

// Spread
const nums = [1, 2, 3];
const newNums = [...nums, 4];

// Rest
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

🔹 7. Object Property Shorthand

Create objects with shorter syntax when variable names match property names.

const name = 'Bob';
const user = { name };  // same as { name: name }

🔹 8. Object Destructuring in Function Parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

🔹 9. Promises

Used for asynchronous operations.

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

🔹 10. Classes

ES6 introduced class syntax for easier OOP.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

🔹 11. Modules (import/export)

Used for modular JavaScript.

// module.js
export const PI = 3.14;

// main.js
import { PI } from './module.js';

🔹 12. Enhanced Object Literals

Can define methods and use computed property names.

const prop = 'age';
const person = {
  name: 'Sam',
  [prop]: 25,
  greet() {
    console.log('Hello!');
  }
};