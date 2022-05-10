// isDivisible?
// * Create a function named isDivisible . The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
// **Examples**:
// 1 ➞ false
// 1000 ➞ true
// 100

const isDivisible = (num) => num % 100 == 0;

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));
