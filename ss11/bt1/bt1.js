"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`tên:${this.name}, công ty:${this.company},số điện thoại:${this.phone}`);
    }
    getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`tên:${this.name}, công ty:${this.company},số điện thoại:${this.getPhone()}, team size:${this.teamSize}`);
    }
}
let employee = new Manager("thiều", "ABCXYZ", 1355483082, 4);
employee.printInfo();
