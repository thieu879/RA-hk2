"use strict";
class MessagePrinter {
    constructor(condition) {
        this.condition = condition;
    }
    printMessage() {
        if (this.condition) {
            console.log("Xin chào");
        }
        else {
            console.log("Tạm biệt");
        }
    }
}
let myCondition = true;
let printer = new MessagePrinter(myCondition);
printer.printMessage();
