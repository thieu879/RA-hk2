"use strict";
function add(a, b) {
    const numA = parseFloat(a.toString());
    const numB = parseFloat(b.toString());
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Invalid input");
    }
    return numA + numB;
}
function subtract(a, b) {
    const numA = parseFloat(a.toString());
    const numB = parseFloat(b.toString());
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Invalid input");
    }
    return numA - numB;
}
function multiply(a, b) {
    const numA = parseFloat(a.toString());
    const numB = parseFloat(b.toString());
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Invalid input");
    }
    return numA * numB;
}
function divide(a, b) {
    const numA = parseFloat(a.toString());
    const numB = parseFloat(b.toString());
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Invalid input");
    }
    if (numB === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numA / numB;
}
console.log(add("3", "5"));
console.log(subtract("10", "4"));
console.log(multiply("2", "7"));
console.log(divide("12", "3"));
