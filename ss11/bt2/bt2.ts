class Employee1 {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
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
class Manager1 extends Employee1{
    teamSize: number
    constructor(name: string, company: string, phone:number, teamSize: number) {
        super(name,company,phone)
        this.teamSize = teamSize
    }
    printInfo(): void {
        console.log(`tên:${this.name}, công ty:${this.company},số điện thoại:${this.getPhone()}, team size:${this.teamSize}`);
        
    }
}
let employee1 = new Manager1("thiều", "ABCXYZ", 1355483082, 4)
employee1.printInfo()