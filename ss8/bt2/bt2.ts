type Person = {
    name: string,
    age: number,
    address:object
}
function validatePerson(a:any):boolean {
    return typeof (a.name) === "string" && typeof (a.age) === "number" && typeof (a.address) === "object";
}
const validPerson1 = {
    name: "Thiều",
    age: 19,
    address: {
        street: "123",
        city: 'HÀ NỘI',
        country: 'VN'
    }
};
const validPerson2 = {
    name: "Vải",
    age: 18,
    address:"nhà"
};
console.log(validatePerson(validPerson1));
console.log(validatePerson(validPerson2));
