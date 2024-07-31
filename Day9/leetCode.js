//Q:1
var createHelloWorld = function() {
    return function(...args) {
        return 'Hello World'
    }
};

//Q:2
var createCounter = function(n) {
    var count = -1;
    return function() {
        count++
        return n + count
    };
};
