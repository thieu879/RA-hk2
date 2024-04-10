type D = {
    name:string,
}
type E = {
    age: number,
    address:string
}
let person1:D = { name: "Thiều" }
let person2:E = { age: 19, address: "Nhà" }
function Incorporate(A:D, B:E): any {
    type C = D & E
    let a: C = {
        name: person1.name,
        age: person2.age,
        address: person2.address
    }
    return a;
    
} 
console.log(Incorporate(person1,person2));
