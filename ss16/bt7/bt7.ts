let num1: number = 10;
let num2: number = 5;
let num3: number;

num3 = num1 + num2;
console.log("Kết quả phép cộng:", num3);

num3 = num1 - num2;
console.log("Kết quả phép trừ:", num3);

num3 = num1 * num2;
console.log("Kết quả phép nhân:", num3);

num3 = num1 / num2;
console.log("Kết quả phép chia:", num3);

num1 = "10" as unknown as number;
num2 = true as unknown as number;

num3 = num1 + num2;
console.log("Kết quả phép cộng sau khi thay đổi kiểu:", num3);

num3 = num1 - num2;
console.log("Kết quả phép trừ sau khi thay đổi kiểu:", num3);

num3 = num1 * num2;
console.log("Kết quả phép nhân sau khi thay đổi kiểu:", num3);

num3 = num1 / num2;
console.log("Kết quả phép chia sau khi thay đổi kiểu:", num3);
