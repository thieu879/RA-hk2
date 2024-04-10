"use strict";
function kiemTraLoaiDuLieu(arg) {
    if (typeof arg === "number") {
        console.log("Biến là một số.");
    }
    else if (Array.isArray(arg)) {
        console.log("Biến là một mảng.");
    }
    else if (typeof arg === "object") {
        console.log("Biến là một đối tượng.");
    }
    else {
        console.log("Không xác định được");
    }
}
kiemTraLoaiDuLieu(123);
kiemTraLoaiDuLieu([1, 2, 3]);
kiemTraLoaiDuLieu({ name: "Thiều", age: 19 });
kiemTraLoaiDuLieu("1");
