let num3: number = 10;
let num4: number = 5;
let num5: number;

num5 = num3 + num4;
console.log("Tổng:", num5);

num5 = num3 - num4;
console.log("Hiệu:", num5);

num5 = num3 * num4;
console.log("Tích:", num5);

num5 = num3 / num4;
console.log("Thương:", num5);


num3 = "hello" as unknown as number;
num4 = true as unknown as number;

num5 = num3 + num4;
console.log("Tổng sau khi thay đổi kiểu dữ liệu:", num5);

num5 = num3 - num4;
console.log("Hiệu sau khi thay đổi kiểu dữ liệu:", num5);

num5 = num3 * num4;
console.log("Tích sau khi thay đổi kiểu dữ liệu:", num5);

num5 = num3 / num4;
console.log("Thương sau khi thay đổi kiểu dữ liệu:", num5);
