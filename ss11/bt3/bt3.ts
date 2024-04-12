class Person{
    name: string
    constructor(name: string) {
        this.name = name
    }
    displayInfo() {
        console.log(`tên:${this.name}`);
        
    }
}
class Student extends Person{
    id: number
    constructor(name:string,id: number) {
        super(name)
        this.id = id
    }
    displayInfo(): void {
        console.log(`tên:${this.name}, id:${this.id}`);
    }
}
let student = new Student("Thiều", 2)
student.displayInfo()