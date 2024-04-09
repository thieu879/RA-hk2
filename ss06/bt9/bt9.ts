let verbalism: string = "banana"
let result1: string = "";
for (let i of verbalism) {
    if (result1.indexOf(i) === -1) {
        result1 += i;
    }
}
console.log(result1);
