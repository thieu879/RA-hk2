"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        console.log("Các nhân viên:");
        this.employees.forEach(employee => {
            console.log(employee);
        });
    }
}
let department = new Department(1, "class", ["Thiều", "Vải", "Chanh"]);
department.describe();
department.addEmployee("quýt");
department.listEmployees();
