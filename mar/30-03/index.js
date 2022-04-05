// Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!

//-----

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
// function arr loop number sum
// Old school

function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return console.log(sum);
}

sumOfNumbers([2, 3, 5]);
