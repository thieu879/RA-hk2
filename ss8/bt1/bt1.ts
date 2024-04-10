function parseInput(value: number | boolean | string | null | undefined) {
    if (value === null) {
        return null;
    } else {
        console.log(typeof(value));
    }
}
parseInput(1)
parseInput("1")
parseInput(true)
console.log(parseInput(null));
parseInput(undefined)