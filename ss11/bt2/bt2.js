"use strict";
class Employee1 {
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
class Manager1 extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`tên:${this.name}, công ty:${this.company},số điện thoại:${this.getPhone()}, team size:${this.teamSize}`);
    }
}
let employee1 = new Manager1("thiều", "ABCXYZ", 1355483082, 4);
employee1.printInfo();
