// Gustavo Olgiati
// 1216388953
// August 30, 2023

/* function greetTheStudent(studentName) { // parameter // name function
    return `Hello there ${studentName}`;
} */

/* const greetTheStudent = function (studentName) { // parameter // anonymous function
    return `Hello there ${studentName}`;
} */

// fat arrow function
/* const greetTheStudent = (studentName) => { // parameter // anonymous function
    return `Hello there ${studentName}`;
} */

const greetTheStudent = studentName => `Hello there ${studentName}`;

const student = `Gustavo Olgiati`

const greet = greetTheStudent(student); //argument
console.log(greet);