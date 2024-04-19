class MessagePrinter<T> {
    constructor(private condition: boolean) {}

    printMessage(): void {
        if (this.condition) {
            console.log("Xin chào");
        } else {
            console.log("Tạm biệt");
        }
    }
}

let myCondition: boolean = true;
let printer = new MessagePrinter<boolean>(myCondition);
printer.printMessage();
