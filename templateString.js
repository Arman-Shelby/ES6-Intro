// const poem = 'aaam pata jora jora 
// marbe chabuk cholbe ghora'



// const poem = 'aaam pata jora jora  marbe chabuk cholbe ghora'



const poem = `aam pata jora jora
marbo chabuk chorbo ghora 
ore babu ghure dara
asche amar pagla ghora 
pagla ghora khepese 
chabuk chure merece`;
console.log(poem)

console.log('-----------------------------')

function sum(num1 , num2){
    const result = num1 +  num2;
    // const output = 'Sum of  ' + num1 + ' and ' + num2 + ' is equal to ' + result;

    const output = `sum of ${num1} and ${num2}`
    console.log(output);
}

sum (10, 20);
console.log('--------------------------------');

const price  = 100;
const discountedPrice = `Discounted Price is after 20% discount ${price * 0.8}`
console.log(discountedPrice)