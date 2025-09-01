function sum(num1 = 0 , num2 = 5){ //default value kaj korbe jokhon function e kono argument pass kora hobe na
    const total = num1 + num2;

    console.log(total);
}
sum(10); // NaN -->    Not a Number
sum(10, 20); // 30
sum(); // 5

console.log('------------------');

function multiply(a = 0 , b = 0){ // multiply korar somoy man 0 to deya jabe na 
    const result = a * b;
   console.log(result);
}

multiply(10); 

console.log('----------------')

function fullName (first , last=''){
    const name = first + last 
    console.log(name)
}
fullName('Satul')


// add , sub korle maaan ==== 0
// multiply ----1
// string ===== '
// array = [] --empty
//object = {} --empty