// Q:1
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
      let result=x;
      for(let i=functions.length-1;i>=0;i--){
          x=(functions[i])(x);
      }
      return x;
  }
};

// Q:2
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let called=false;
  return function(...args){
      if(!called){
          called=true;
          return fn(...args);
      }
      else{
          return undefined;
      }
  }
};