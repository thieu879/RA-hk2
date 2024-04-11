class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    describe(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    listEmployees(): void {
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
