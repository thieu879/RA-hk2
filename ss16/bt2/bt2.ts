let convert = <T>(arr: T[], index1: number, index2: number) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}
console.log(convert([1,"2"],0,1));
