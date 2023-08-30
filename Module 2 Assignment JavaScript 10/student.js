// Name: Gustavo Olgiati
// Student ID: 1216388953
// Date: 8/30/2023

var students = [];

var student = {
    name: 'John Smith',
    birthYear: 2002,
    course: 'ITF-458',
    grade: 90,
    active: true,
    age: function calculate(){
        if(this.active) {
            return 2023 - this.birthYear;
        } else {
            return 0;
        }
    }
}

var student2 = {
    name: 'Andy Moore',
    birthYear: 2000,
    course: 'ITF-458',
    grade: 90,
    active: false,
    age: function calculate(){
        if(this.active) {
            return 2023 - this.birthYear;
        } else {
            return 0;
        }
    }
}

// console.log(student['name']);
// console.log(student.name);

// console.log(student2.age());
// console.log(student.age());

students.push(student);
students.push(student2);

students.forEach((item) => console.log(item.age()));

console.log(students);

