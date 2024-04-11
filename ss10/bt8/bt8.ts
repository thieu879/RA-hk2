class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getRectangle(): void {
        console.log("Chiều rộng: ", this.width);
        console.log("Chiều dài: ", this.height);
        console.log("Chu vi: ", (this.width + this.height) * 2);
        console.log("Diện tích: ", this.width * this.height);
    }

    setLength(width: number, height: number): void {
        this.width = width;
        this.height = height
    }
}

const rectangle = new Rectangle(7,8);

console.log("Hình chữ nhật:");
rectangle.getRectangle();

console.log("update Hình chữ nhật:");
rectangle.setLength(6,7);
rectangle.getRectangle();
