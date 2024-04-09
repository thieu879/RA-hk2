"use strict";
let firstName = "thiều";
let lastName = "Nguyễn";
let fullName;
function chekc1(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
    firstName = chekc1(firstName);
}
if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
    lastName = chekc1(lastName);
}
fullName = firstName + " " + lastName;
console.log("Họ và tên đầy đủ:", fullName);
