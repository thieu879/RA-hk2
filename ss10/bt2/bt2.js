"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
let student1 = new Student(1, 19, "student1@example.com");
let student2 = new Student(2, 19, "student2@example.com");
students.push(student1);
students.push(student2);
students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
