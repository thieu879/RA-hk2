"use strict";
// Protected
// - Các thành viên được đánh dấu là protected chỉ có thể truy cập từ bên trong lớp đó hoặc từ các lớp con của nó.
// - Trong một lớp con, các thành viên protected của lớp cha có thể được truy cập như các thành viên của lớp con đó.
// - Các thành viên protected không thể truy cập từ bên ngoài của lớp.
// private
// - Các thành viên được đánh dấu là private chỉ có thể truy cập từ bên trong lớp đó.
// - Các thành viên private không thể truy cập từ bên ngoài của lớp, bao gồm cả các lớp con của nó.
// Ví Dụ:
class People {
    constructor(name, number1) {
        this.name = name;
        this.number1 = number1;
    }
}
