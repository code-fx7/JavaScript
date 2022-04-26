const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};

// Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("Go");

// Using a loop, console.log all of the values in the programming object.

for (const key in programming) {
  console.log(programming[key]);
}

// Write a command to add a new key called isFun and a value of true to the programming object.

programming["isFun"] = true;
console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.

for (const element of programming.languages) {
  console.log(element);
}

// Using a loop, console.log all of the keys in the programming object.

for (const key in programming) {
  console.log(key);
}

const keysInProgramming = Object.keys(programming);
console.log(keysInProgramming);

for (const element of keysInProgramming) {
  console.log(element);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

programming.giveItTry = function () {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
  }
};

console.log(programming.giveItTry());

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

console.log(programming);

//----------

// Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
// Examples:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

const freeShipping = (obj) => {
  const valuesArr = Object.values(obj);
  let sum = valuesArr.reduce((acc, cur) => acc + cur, 0);
  return console.log(sum > 50);
};

freeShipping({ Sponge: 3.5, Soap: 5.99 });
freeShipping({ "Surround Sound Equipment": 499.99 });
freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 });

//----------

// MakePairs - Write a method that returns a deep array like [[key, value]]
// Task description: Write a method that returns a deep array like [[key, value]]
// Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const obj = { a: 1, b: 2 };
function makePairs(obj) {
  console.log(Object.entries(obj));
}

makePairs(obj);

//----------

// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
  firstName: "Christoph",
  age: 37,
  add: "Südbrookmerland",
  job: "WebDev",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//----------

// 2. Get Values. Create a function that returns an array of all values of an object's properties.

// Examples:
//  getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
//  })
// Expected output:
// ["tea", "coffee", "milk"]

function getObjectValues(obj) {
  console.log(Object.values(obj));
}
getObjectValues( {
  choice1: "tea",
  choice2: "coffe",
  choice3: "milk",
});

//----------

// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith",
//   job: "driver",
//   age: 20,
//   city: "Paris"
// }
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".

personM = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
}

person.print = function () {
  console.log(`${this.firstName, this.lastName} is a ${this,age} year old ${this.city}`)
}
//----------

// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]

//----------

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]
