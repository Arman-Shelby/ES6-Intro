const employee = {
    name: ' Raja Rani ',
    designation: 'QA',
    salary: '20000',
    experience: 1
}
// Object.keys returns the names of all properties in an object
const keys = Object.keys(employee)
console.log(keys)

//Object.values returns the every values in an object 

const values = Object.values(employee)
console.log(values)



//Object.entries returns the every entries(both keys and values ) as a two dimensional arrays
const entries = Object.entries(employee)
console.log(entries)