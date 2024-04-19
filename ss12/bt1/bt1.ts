abstract class Animal{
    name: string
    constructor(name: string) {
        this.name = name
    }
    makeNoise(): void{
        
    }
    printName(): void{
        console.log(`${this.name}`);
    } 
}
class Cat extends Animal{
    makeNoise(): void {
        console.log("Meo Meo");
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("Gâu Gâu");
    }
}
let cat1 = new Cat("Chó")
cat1.printName();
cat1.makeNoise();

let dog1 = new Dog("Mèo")
dog1.printName();
dog1.makeNoise();