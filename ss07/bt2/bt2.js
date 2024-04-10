"use strict";
// Mảng (Array):
// Mảng các số nguyên
let numbers = [1, 2, 3, 4, 5];
numbers.push("hello"); //lỗi do kiểu dữ liệu của numbers là number 
console.log(numbers[0]);
// Tuple:
// Tuple lưu trữ thông tin của một người: tên (string) và tuổi (number)
let person = ["John", 30];
person.push("hello");
console.log(person[0]);
console.log(person[1]);
console.log(person);
// =>tất cả các phần tử đều có cùng kiểu dữ liệu và có thể thay đổi kích thước, 
// trong khi Tuple có số lượng phần tử cố định và mỗi phần tử có thể có một kiểu dữ liệu riêng.
