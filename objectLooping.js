const numbers = [ 1, 2, 566, 564, 2554]

for (const num of numbers){
    console.log(num)
}


const employee = {
    name: ' Raja Rani ',
    designation: 'QA',
    salary: '20000',
    experience: 1

}

for (const key in employee){
    const value = employee[key];
    console.log(key,value)
}

const keys = Object.keys(employee);
console.log(keys)

for (const key of keys){
    const value = employee[key]
}