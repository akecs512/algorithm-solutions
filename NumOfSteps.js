// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

//INTUITION: I need to check if the number is even, if it is, divide it by 2, if not, subtract 1 until the number is equal to 0. I need to return the number of steps it took to reduce the number to 0.


/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    //set the number of steps to 0
    let steps = 0
    //while the number is not equal to 0
    while (num != 0);{
        //if the number is divisible by 2, then divide by 2, otherwise subtract 1
    num % 2 === 0 ? num /= 2 : num--;
    //continue counting the steps
    steps++
    }
    //return the number of steps
return steps
    
};

console.log(numberOfSteps(14));//6