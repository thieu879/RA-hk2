"use strict";
let convert = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};
console.log(convert([1, "2"], 0, 1));
