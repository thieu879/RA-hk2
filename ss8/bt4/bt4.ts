function tinhBinhPhuong(a:any) {
    if (typeof a === "number") {
        return a * a;
    }
    else if (Array.isArray(a)) {
        return a.map(function(item) {
            return item * item;
        });
    }   
}

console.log(tinhBinhPhuong(5));
console.log(tinhBinhPhuong([1, 2, 3, 4]));
