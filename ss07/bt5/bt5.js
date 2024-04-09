"use strict";
let variableAny;
let variableUnknown;
variableAny = 10;
console.log(variableAny.toFixed(2));
// Không có lỗi:Biến có kiểu any có thể là bất kỳ kiểu dữ liệu nào và TypeScript không kiểm tra kiểu dữ liệu của nó.
variableUnknown = "Hello";
console.log(variableUnknown.toUpperCase());
// Lỗi:TypeScript không cho phép truy cập trực tiếp vào các thuộc tính của biến có kiểu unknown mà không thực hiện kiểm tra hoặc ép kiểu trước.
// =>unknowns cũng giống như any nhưng nó chặt hơn và khi sử dụng phải kiểm tra
