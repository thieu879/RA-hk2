// Union Types 
let a: number | string = 5
a = "true";
a = 4;
//không lỗi do a đã gắn kiêur dữ liệu number | string
// a = true;//lỗi do kiểu boolean không thể gán cho tham số có kiểu dữ liệu là number | string
// =>cho phép chúng ta khai báo một kiểu dữ liệu có thể là một trong số các kiểu dữ liệu đã cho

//  Intersection Types 
type A = {
            name:string
}
type B = {
    address: string,
    id: number
}
type C = A & B;
let c: C = {
    name: "Thiều",
    address: "Hà Nội",
    id:5
}
// =>cho phép chúng ta kết hợp nhiều kiểu dữ liệu thành một

/* 
    =>Tóm lại, Union Types cho phép một biến có thể là một trong số các kiểu đã cho, 
    trong khi Intersection Types yêu cầu một biến phải thoả mãn tất cả các kiểu đã cho
*/