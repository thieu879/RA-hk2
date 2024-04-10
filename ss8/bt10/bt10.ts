type interfacePerson = {
    name: string;
    age: number;
}

type interfaceEmployee = {
    employeeId: string;
}
type Employee = interfacePerson & interfaceEmployee;
const employee: Employee = {
    name: "Thiều",
    age: 19,
    employeeId: "B23DTCN175"
};

console.log(employee);
