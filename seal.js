// Object.seal prevents the addition or deletion of attributes of an existing object  But  modification of attributes of objects works 
const employee = {
    name: ' Raja Rani ',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.seal(employee)

delete employee.experience
delete employee.age



employee.salary = employee.salary+5000
employee.location = 'Dhaka'

console.log(employee)