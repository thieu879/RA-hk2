"use strict";
function mergeObjects(obj) {
    let mergedObject = {};
    obj.forEach(item => {
        mergedObject = Object.assign(Object.assign({}, mergeObjects), item);
    });
    return mergedObject;
}
let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    }
};
let object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};
console.log(mergeObjects([object1, object2]));
