//function declaration

function add (num1, num2){
    return num1+ num2;
}


//function expression
const addition = function(num1 , num2){
    return num1 + num2;

}


//arrow function

const add2 = (num1 , num2) => num1 + num2;
const result = add2(17, 13);
console.log(result)



const multiply = (a, b) => a * b;
const mult  = multiply(8, 9);
console.log(mult);



const sumAll = (a , b , c , d , e , f) => a + b + c + d + e + f;

const resultSumAll  = sumAll(10 , 54 , 478 , 54 , 5564,54)
console.log(resultSumAll)

const isFirstBig = (x , y ) => (x > y);
const isBig = isFirstBig(45 , 12);
console.log(isBig)


//multi line arrow function

const doMath = (x , y) => {
    const makeDouble  = x*2 ;
    const againDouble = y * 2 ;
    const  result = makeDouble + againDouble;

    return result

}

