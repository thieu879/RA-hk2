type FunctionType9 = (...args: any[]) => void;

function throttleDecorator9(fn: FunctionType9, interval: number): FunctionType {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastExecutedTime: number = 0;

  const throttledFn: FunctionType9 = (...args: any[]) => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastExecutedTime;

    if (timeout === null || elapsedTime >= interval) {
      fn(...args);
      lastExecutedTime = currentTime;
    } else if (timeout === null) {
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null;
        lastExecutedTime = Date.now();
      }, interval - elapsedTime);
    }
  };

  return throttledFn;
}

const logMessage = (message: string) => {
  console.log(message);
};
const throttledLog = throttleDecorator9(logMessage, 1000);
throttledLog("Message 1");
throttledLog("Message 2");
setTimeout(() => throttledLog("Message 3"), 1200);
