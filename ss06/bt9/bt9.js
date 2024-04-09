"use strict";
let verbalism = "banana";
let result1 = "";
for (let i of verbalism) {
    if (result1.indexOf(i) === -1) {
        result1 += i;
    }
}
console.log(result1);
