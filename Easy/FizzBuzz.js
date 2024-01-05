// Given an integer n, return a string array answer(1 - indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i(as a string) if none of the above conditions are true.

//INTUITION: I have to iterate through an array of numbers of the given length, determine if the number is divisible by 3 or 5 or both or none, and return an array with the correct response.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    //let the response be an array
    let res = []
    //let the individual numbers in the array start at 1, if the number is less than n, continue to the next number.
    for (let i = 1; i <= n; i++) {
        //set the variable string to an empty string
        let string = ""
        //if the number is divided by 3 and equals 0, make it equal to the string "Fizz"
        if (i % 3 === 0) string += "Fizz"
        //if the number is divided by 6 and equals 0, make it equal to the string "Buzz"
        if (i % 5 === 0) string += "Buzz"
        
        //if the number does not divide by 3 or 5, then make it equal to the string of the number "i", 
        if (string === "") string += i
        //in the response array, push each string answer.
        res.push(string)
    }
    return res
};

console.log(fizzBuzz(3));//["1","2","Fizz"]
console.log(fizzBuzz(5));// ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));//["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


