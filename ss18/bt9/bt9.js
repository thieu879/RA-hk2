"use strict";
function throttleDecorator9(fn, interval) {
    let timeout = null;
    let lastExecutedTime = 0;
    const throttledFn = (...args) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastExecutedTime;
        if (timeout === null || elapsedTime >= interval) {
            fn(...args);
            lastExecutedTime = currentTime;
        }
        else if (timeout === null) {
            timeout = setTimeout(() => {
                fn(...args);
                timeout = null;
                lastExecutedTime = Date.now();
            }, interval - elapsedTime);
        }
    };
    return throttledFn;
}
const logMessage = (message) => {
    console.log(message);
};
const throttledLog = throttleDecorator9(logMessage, 1000);
throttledLog("Message 1");
throttledLog("Message 2");
setTimeout(() => throttledLog("Message 3"), 1200);
