"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeNoise() {
    }
    printName() {
        console.log(`${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Gâu Gâu");
    }
}
let cat1 = new Cat("Chó");
cat1.printName();
cat1.makeNoise();
let dog1 = new Dog("Mèo");
dog1.printName();
dog1.makeNoise();
