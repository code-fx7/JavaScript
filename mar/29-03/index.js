// const cityNames = ["Berlin", "Paris", "Prague", "Rome"];
// let strCity = "";
// for (let i = 0; i < cityArr.length; i++) {
//  strCity += `${cityNames[i]}${i == cityArr.length - 1 ? " " : ", "}`;
// }
// console.log(strCity);

// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"

const namesArr = ["Maria", "Mike", "Paul", "Doven"];
let str = "";
for (let i = 0; i < namesArr.length; i++) {
  str += `Hello ${namesArr[i]}! `;
}

console.log(str);

// [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".

const friendsArr = ["Susan", "Rezvane", "Hadi"];
let strFriends = "";
for (let i = 0; i < friendsArr.length; i++) {
  strFriends += `${
    friendsArr[i]
  } is at index ${i} of my friends and family array ${
    i == friendsArr.length - 1 ? "." : ","
  } `;
}

console.log(strFriends);

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

// const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
// let secondItem = euroCities[1];
// console.log(seconsItem);

// // Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

function capitalizes(names) {
  for (let i = 0; i < names.length; i++) {
    // let first = names[i][0].toUpperCase();
    // let rest = names[i].substring(1).toLowerCase();
    // names[i] = first + rest;
    
    // oder
    names[i] =names[i][0].toUpperCase() + names[i].substring(1).toLowerCase();
  }
  return console.log(names);
}

const arr1 = ["matt", "sara", "lara"];
const arr2 = ["samuel", "MARIA", "luke", "mary"];
const arr3 = ["Cynthia", "Karen", "Jane", "Carrie"];
capitalizes(arr1);
capitalizes(arr2);
capitalizes(arr3);

// -----
// Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]

function repeatIt(str, num) {
    let arr = [];
for (let i = 0; i < num; i++) {
    arr[i] = str;
}
return console.table(arr);
}

repeatIt("Ali", 5);
repeatIt("Steele", 2);

// -----
// Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// The returned string should only contain alphabetic characters (a-z).
// Preserve case in the returned string (see 4th example above).
// Examples:
// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday"

function wordRank(str) {
    let longestWord = 0;
    let strToArr = str.split(" ");
    console.log(strToArr);
    return longestWord;
}
wordRank("Nancy is very cool");

// -----
// // The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

function findGreatest(arr, num) {
    let str = "";
    
}

// -----
// Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []