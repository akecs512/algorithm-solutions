// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

//INTUITION:I need to get the sum of each array, compare them, and return the largest sum.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    //set the initial total to 0
    let total = 0;
    //set i to 0, if i is less than the length of the accounts array, then continue to the next account.
    for (let i = 0; i < accounts.length; i++) {
        //set amount of innerArrays to the number of account arrays.
        let innerArray = accounts[i];
        //set the initial sum of the array to 0
        let sum = 0;
        //set j to 0, if j is less than the length of the innerArray, then continue to add the next number.
        for (let j = 0; j < innerArray.length; j++) {
            //add the numbers in the innerArray and make it equal to the sum
            sum += innerArray[j];
            //compare the total of the account to the sum. the sum that has the greatest total is made equal to the total, and then the total is returned.
            if (total < sum) {
                total = sum;
            }

        }
    }
    return total;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));//6
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])); //10
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));//17