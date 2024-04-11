class Vehicle1 {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    printInfoVehicle(): void {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}

let a = new Vehicle1("Tesla Model S", 2020, "Tesla", 1);

a.printInfoVehicle();
