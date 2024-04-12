"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`tên:${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`tên:${this.name}, id:${this.id}`);
    }
}
let student = new Student("Thiều", 2);
student.displayInfo();
