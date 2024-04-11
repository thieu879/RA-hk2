class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

let vehicle1 = new Vehicle("Tesla Model S", 2020, "Tesla");
let vehicle2 = new Vehicle("Toyota Corolla", 2019, "Toyota");

console.log(`Name: ${vehicle1.name}, Year: ${vehicle1.year}, Company: ${vehicle1.company}`);
console.log(`Name: ${vehicle2.name}, Year: ${vehicle2.year}, Company: ${vehicle2.company}`);
