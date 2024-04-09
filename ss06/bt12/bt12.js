"use strict";
const input1 = "hello world apple banana orange pumpkin cucumber";
const words = input1.split(" ");
let longestWord = "";
for (let word of words) {
    const uniqueChars = [];
    for (let char of word) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }
    if (uniqueChars.length === word.length && word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log("Từ dài nhất không có các ký tự trùng nhau:", longestWord);
