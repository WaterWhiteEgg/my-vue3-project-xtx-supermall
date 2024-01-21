export const debounce = (func, delay = 300) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(function() {
            func.apply(this, args);
        }, delay);
    };
};