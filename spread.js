
const numbers = [754, 5454, 54584, 8484];
console.log(numbers)
console.log(...numbers)


// const max = Math.max(21, 15148564 ,2125454, 54512,19413400);
const max = Math.max(...numbers);
console.log(max)


// const first = [1, 2, 3, 4 ,5];
// const second = first
// second.push(6);
// console.log(first , second)


//copy array and push 
//ekta array er moddhe tuuut tuuut kore onno array bosai dite hooyy...   [ ( .-.-. ) ]
const first = [1, 2, 3, 4 ,5];
const second = [...first]
const third = [...first, 236,456,456]
second.push(6);
console.log(first , second ,'third \n', third)


const ages = [45, 45, 1];
const prices = [98, 65,45];

const all = [...ages,555, ...prices];



const person = {
    name: 'mizaan' , age: 25
}
const employee = { designation: 'dev',...person}

console.log(employee)


const total = (a, b, c) =>a + b + c;
const result = total(45, 56 , 21)
const digits = [78, 56 , 66];
total(...digits);