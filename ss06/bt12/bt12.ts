const input1: string = "hello world apple banana orange pumpkin cucumber";

const words: string[] = input1.split(" ");

let longestWord: string = "";

for (let word of words) {
    const uniqueChars: string[] = [];
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
