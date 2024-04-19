"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`học sinh ${this.name} có id là ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Giáo viên ${this.name} dậy môn ${this.subject}`);
    }
}
let student1 = new Student("Thiều", 2);
student1.displayInfo();
let teacher1 = new Teacher("Vải", "Toán");
teacher1.displayInfo();
