// Q:1:-
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

//Q:2:-
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init;
    }
    let val=init;
    for(let i=0;i<nums.length;i++){
        val=fn(val,nums[i]);
    }
    return val;
};