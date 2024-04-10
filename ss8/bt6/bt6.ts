function printStringOrArray(arg: string | string[]) {
    if (typeof arg === "string") {
        console.log(arg);
    } else if (Array.isArray(arg)) {
        arg.forEach(item => {
            console.log(item);
        });
    } else {
        console.log("m đùa t à!!!");
        
    }
}

printStringOrArray("123");

printStringOrArray(["1", "2", "3"]);

