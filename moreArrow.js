//20% discount ===
//20/100*100
const getTax = (amount , taxrate) => amount*taxrate/100;

const add = (p,q) => p + q ;


//single parameter

const getSquare =  (x) => x*x;
console.log(getSquare(8));


const getHalf = num =>num/2;
console.log(getHalf(15))


const firstElement = nums =>nums[0];
console.log(firstElement([9,54,48548,8454]))


const logIt = () =>console.log(78)
logIt();



//Anonymus function 
document.getElementById(' ').addEventListener("click", () =>{

})

document.getElementById('button-click').addEventListener('click', event =>{

})