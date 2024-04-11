"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name1 = name;
        this.length1 = length;
    }
    get name() {
        return this.name1;
    }
    set name(newName) {
        this.name1 = newName;
    }
    get length() {
        return this.length1;
    }
    set length(newLength) {
        this.length1 = newLength;
    }
}
let mySong = new Song(1, "chúng ta của hiện tại", "240s");
console.log("ID:", mySong.id);
console.log("Name:", mySong.name);
console.log("Length:", mySong.length);
mySong.name = "chúng ta của tương lai";
mySong.length = "210s";
console.log("Updated Name:", mySong.name);
console.log("Updated Length:", mySong.length);
