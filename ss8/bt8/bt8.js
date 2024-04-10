"use strict";
let person1 = { name: "Thiều" };
let person2 = { age: 19, address: "Nhà" };
function Incorporate(A, B) {
    let a = {
        name: person1.name,
        age: person2.age,
        address: person2.address
    };
    return a;
}
console.log(Incorporate(person1, person2));
