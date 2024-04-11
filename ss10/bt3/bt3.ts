class Employee {
    public name: string;
    company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}

let employee1 = new Employee("Thiều", "rikkeiacademy", "0355483082");

employee1.printInfo();
