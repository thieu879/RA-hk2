abstract class Person{
    name: string
    constructor(name:string) {
        this.name=name
    }
    displayInfo(): void{        
    }
}
class Student extends Person{
    id: number
    constructor(name: string, id: number) {
        super(name)
        this.id = id
    }
    displayInfo(): void {
        console.log(`học sinh ${this.name} có id là ${this.id}`);
    }
}
class Teacher extends Person{
    subject: string
    constructor(name: string, subject: string) {
        super(name)
        this.subject = subject
    }
    displayInfo(): void {
        console.log(`Giáo viên ${this.name} dậy môn ${this.subject}`);
    }
}
let student1 = new Student("Thiều", 2)
student1.displayInfo()
let teacher1 = new Teacher("Vải", "Toán")
teacher1.displayInfo()