//Q:1:-
// Write a function createCounter. It should accept an initial integer init. 
// It should return an object with three functions.
// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const original=init;
    const obj={
        increment(){
            init=init+1;
            return init;
        },
        reset(){
            init=original;
            return init;
        },
        decrement(){
            init=init-1;
            return init;
        }
    };
    return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


//Q:2:-
// Given an integer array arr and a mapping function fn, return a new array 
// with a transformation applied to each element.

// The returned array should be created such that 
// returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=fn(arr[i],i);
    }
    return arr;
};