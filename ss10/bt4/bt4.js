"use strict";
class Vehicle1 {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfoVehicle() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}
let a = new Vehicle1("Tesla Model S", 2020, "Tesla", 1);
a.printInfoVehicle();
